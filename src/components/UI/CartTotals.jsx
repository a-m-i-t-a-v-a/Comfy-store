import { useSelector } from "react-redux"
import { formatPrice } from "../../utils/helper"

const CartTotals = () => {
  const {cartTotal,shipping,tax,orderTotal}=useSelector(state=>state.cart)
  return (
    <div className="card bg-bas-200">
      <div className="card-body">
        {/*SUBTOTAL*/}
        <p className="flex justify-between text-xs border-b border-base-300 pb-2">
            <span>Sub total</span>
            <span className="font-medium">{formatPrice(cartTotal)}</span>
        </p>
      </div>
      <div className="card-body">
        {/*SHIPPING*/}
        <p className="flex justify-between text-xs border-b border-base-300 pb-2">
            <span>Shipping</span>
            <span className="font-medium">{formatPrice(shipping)}</span>
        </p>
      </div>
      <div className="card-body">
        {/*TAX*/}
        <p className="flex justify-between text-xs border-b border-base-300 pb-2">
            <span>Tax</span>
            <span className="font-medium">{formatPrice(tax)}</span>
        </p>
      </div>
      <div className="card-body">
        {/*ORDER TOTAL*/}
        <p className="flex justify-between text-s mt-4 pb-2">
            <span>Order Total</span>
            <span className="font-medium">{formatPrice(orderTotal)}</span>
        </p>
      </div>
    </div>
  )
}

export default CartTotals
