// import React from 'react'
import AddToCartBtn from './AddToCartBtn'

const Product = ({ data, priceTag, cart, increase, decrease }) => {
    
    return (
        <div className="flex gap-4 flex-wrap">
            {
                data.map(product => (
                    <div key={product.id}
                        className=' flex-1 flex-shrink min-w-[200px]'>
                        <div className={`mb-8 relative ${(cart[product.id] || 0) > 0? 'border-2 border-redC' : ''} rounded-md`}>
                            <img src={product.image.desktop} alt="" className='rounded-md w-full'/>
                            <AddToCartBtn 
                                increase={increase}
                                decrease = {decrease}
                                productId = {product.id}
                                quantity = {cart[product.id] || 0}
                            />
                        </div>
                        <small className="text-xs text-roseC-400">{product.category}</small>
                        <h3 className="leading-6 text-sm font-redhattextsemibold">{product.name}</h3>
                        <span className='block leading-6 text-redC font-redhattextsemibold text-sm'>${priceTag(product.price)}</span>
                    </div>
                ))
            }
        </div>

    )
}

export default Product