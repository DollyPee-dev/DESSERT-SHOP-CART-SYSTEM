import carbonIcon from '/assets/images/icon-carbon-neutral.svg'
const ActiveCart = ({ handleConfirmOrder, cartItems, priceTag, handleDelete, orderTotal }) => {


  return (
    <div>
        <div className='max-h-[180px] overflow-y-scroll [scrollbar-width:none]'>
            {
                cartItems.map(item => (
                    <div key={item.id} className="flex items-center justify-between border-b border-roseC-100 py-3">
                        <div>
                            <h3 className="mb-1 font-redhattextsemibold text-roseC-900 text-sm">{item.name}</h3>
                            <div className="flex text-sm">
                                <span className="text-redC block mr-4 font-redhattextsemibold">{item.quantity}x</span>
                                <div className="flex gap-2">
                                    <span className="text-roseC-400">@ ${priceTag(item.price)}</span>
                                    <span className="font-redhattextsemibold text-roseC-500">${priceTag(item.price * item.quantity)}</span>
                                </div>
                            </div>
                        </div>
                         <i
                         onClick={() => handleDelete(item.id)}
                         className="pi pi-times text-roseC-500
                          text-[10px] p-[2px] rounded-full
                          border border-roseC-500 hover:text-roseC-900
                          hover:border-roseC-900 cursor-pointer"></i>
                    </div>
                ))
            }
        </div>

        <div className="mt-6">
            <div className="w-full flex items-center justify-between">
                <small>Order Total</small>
                <span className="font-redhattextbold text-base">${priceTag(orderTotal)}</span>
            </div>
            <div className='flex items-center justify-center gap-2 mt-5 bg-rose-50/80 py-3 rounded-md'>
                <img src={carbonIcon} alt="" />
                <small>This is a <span className="font-semibold">carbon-neutral</span> delivery</small>
            </div>
            <button onClick={() => handleConfirmOrder()} className='bg-redC py-2 text-roseC-100 rounded-full w-full mt-5'>Confirm Order</button>
        </div>
    </div>
  )
}

export default ActiveCart