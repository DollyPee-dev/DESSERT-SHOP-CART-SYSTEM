import cartIcon from '/assets/images/icon-add-to-cart.svg'


const AddToCartBtn = ({ increase, decrease, quantity, productId }) => {

    const active = quantity > 0;

    return (
        <button
        onClick={() => {if (!active) increase(productId)}}
            className={`${active? 'bg-redC px-3' : 'bg-white px-6' } absolute
                border border-redC py-2
                rounded-full  -bottom-6 
                left-1/2 -translate-x-1/2 w-max`}
            >
            {active ?
                <div className="flex items-center gap-12 text-roseC-100">
                    <i onClick={() => decrease(productId)} className="pi pi-minus cartBtn"></i>
                    <span>{quantity}</span>
                    <i onClick={() => increase(productId)} className="pi pi-plus cartBtn"></i>
                </div>
                :
                <div className='flex items-center gap-2 w-full'>
                    <img src={cartIcon} alt="" />
                    <p>Add to Cart</p>
                </div>
            }
        </button>
    )
}

export default AddToCartBtn