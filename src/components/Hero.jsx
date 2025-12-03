import { useState } from 'react';
import data from '../../data.json'
import Cart from './Cart';
import Product from './Product';
import CartModal from './CartModal';

const Hero = () => {
    const [cart, setCart] = useState({})
    const [confirmOrder, setConfirmOrder] = useState(false)

    function handleConfirmOrder() {
        setConfirmOrder(true)
    }

    const cartItems = Object.entries(cart).map(([productId, quantity]) => {
        const product = data.find(p => p.id === Number(productId))
        return { ...product, quantity }
    })

    const orderTotal = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    )

    function increase(productId) {
        setCart(prev => ({
            ...prev,
            [productId]: (prev[productId] || 0) + 1
        }))
    }

    function decrease(productId) {
        setCart(prev => {
            const newQty = (prev[productId] || 0) - 1
            if (newQty <= 0) {
                const { [productId]: _, ...rest } = prev
                return rest
            }
            return { ...prev, [productId]: newQty }
        })
    }

    function handleDelete(productId) {
        setCart(prev => {
            const { [productId]: _, ...rest } = prev
            return rest
        })
    }

    function priceTag(price) {
        const str = price.toString()
        if (!str.includes(".")) return `${str}.00`
        const decimal = str.split(".")[1].length
        if (decimal === 1) return `${str}0`
        return str
    }

    const totalItems = Object.values(cart).reduce((a, b) => a + b, 0)

    function startOrder() {
        setCart({})
        setConfirmOrder(false)
    }

    return (
        <div className='
            px-5 py-10 
            sm:px-10 sm:py-14 
            md:px-20 md:py-16
            flex flex-col md:flex-row 
            gap-10 md:gap-[3%]
        '>

            {/* LEFT SIDE - PRODUCTS */}
            <div className='w-full md:w-[65%]'>
                <h2 className="font-redhattextbold text-xl sm:text-2xl mb-4">
                    Desserts
                </h2>

                <Product
                    data={data}
                    priceTag={priceTag}
                    increase={increase}
                    decrease={decrease}
                    cart={cart}
                />
            </div>

            {/* RIGHT SIDE - CART */}
            <div className='w-full md:w-[32%]'>
                <Cart
                    totalItems={totalItems}
                    increase={increase}
                    cartItems={cartItems}
                    priceTag={priceTag}
                    totalPrice={(qty, price) => priceTag(qty * price)}
                    handleDelete={handleDelete}
                    orderTotal={orderTotal}
                    handleConfirmOrder={handleConfirmOrder}
                />
            </div>

            {/* MODAL */}
            <CartModal
                priceTag={priceTag}
                cartItems={cartItems}
                orderTotal={orderTotal}
                startOrder={startOrder}
                confirmOrder={confirmOrder}
            />

            {/* DARK OVERLAY */}
            {confirmOrder && (
                <div className='fixed inset-0 bg-black/40 z-10'></div>
            )}
        </div>
    )
}

export default Hero
