import ActiveCart from "./ActiveCart"
import EmptyCart from "./EmptyCart"

const Cart = ({handleConfirmOrder, totalItems, orderTotal,  cartItems, priceTag, totalPrice, handleDelete }) => {
  return (
    <div className="bg-white shadow-sm p-4 rounded-lg">
      <h2 className="mb-1 font-redhattextbold text-redC">Your Cart (<span>{totalItems}</span>)</h2>
      {totalItems === 0 ?
        <EmptyCart />
        :
        <ActiveCart
          cartItems={cartItems}
          priceTag = {priceTag}
          totalPrice = {totalPrice}
          handleDelete = {handleDelete}
          orderTotal = {orderTotal}
          handleConfirmOrder = {handleConfirmOrder}
        />
      }
    </div>
  )
}

export default Cart