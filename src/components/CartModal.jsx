import confirmedOrder from '/assets/images/icon-order-confirmed.svg'


const CartModal = ({ cartItems, priceTag, orderTotal, confirmOrder, startOrder }) => {
    return (
        <div>
            {confirmOrder &&
                <div className="bg-white fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 rounded-lg w-[90%] max-w-[380px] z-20">
                    <img className='w-[30px] mb-4' src={confirmedOrder} alt="" />
                    <h3 className="leading-6 font-redhattextbold text-2xl">Order Confirmed</h3>
                    <small className="leading-6">We hope you enjoy your food</small>
                    <div className='bg-roseC-50 rounded-md p-4 mt-4'>
                        <div className='max-h-[180px] overflow-y-scroll [scrollbar-width:none]'>
                            {
                                cartItems.map(item => (
                                    <div className='flex justify-between items-center mb-4' key={item.id}>
                                        <div className='flex items-center gap-3'>
                                            <img className='w-[35px] rounded-md' src={item.image.thumbnail} alt="" />
                                            <div>
                                                <h4 className='text-xs font-redhattextsemibold'>{item.name}</h4>
                                                <div className='flex items-center gap-4'>
                                                    <span className='text-redC text-sm font-redhattextsemibold'>{item.quantity}x</span>
                                                    <span className='text-sm text-roseC-400'>@{priceTag(item.price)}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <span className='font-redhattextsemibold text-xs'>${priceTag(item.price * item.quantity)}</span>
                                    </div>
                                ))
                            }
                        </div>
                        <div className='flex items-center justify-between py-3'>
                            <small>Order Total</small>
                            <span className='text-sm font-redhattextbold'>${priceTag(orderTotal)}</span>
                        </div>
                    </div>
                    <button onClick={() => startOrder()} className='w-full bg-redC text-rose-100 text-sm font-redhattextsemibold rounded-full py-2 mt-5'>Start New Order</button>
                </div>}
        </div>
    )
}

export default CartModal