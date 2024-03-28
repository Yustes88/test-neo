import '../../App.css'
import './styles.css'
import {useCartContext} from '../../providers/CartProvider'
import CartProdcut from '../cart-product/CartProduct'
import TotalPriceCart from '../totalPriceCart/TotalPriceCart'
import {Link} from 'react-router-dom'

const CartList = () => {
  const {cartItems} = useCartContext()

  if (!cartItems || cartItems.length === 0) {
    return (
      <>
        <div className="empty-cart">
          <h2>Your cart is empty.</h2>
          <p className="empty-cart-description">
            Start shopping{' '}
            <span>
              <Link to="/"> here</Link>
            </span>
            !
          </p>
        </div>
      </>
    )
  }

  return (
    <div className="container">
      <div className="cart-container">
        <div className="cart-list">
          {cartItems.map(cartItem => (
            <CartProdcut item={cartItem} key={cartItem.id} />
          ))}
        </div>
        <TotalPriceCart />
      </div>
    </div>
  )
}

export default CartList
