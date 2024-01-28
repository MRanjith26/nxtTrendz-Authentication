// Write your JS code here
import './index.css'
import {Link} from 'react-router-dom'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="app-logo"
      />
      <ul className="nav-menu">
        <li>
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/products" className="nav-link">
            Products
          </Link>
        </li>
        <li>
          <Link to="/cart" className="nav-link">
            Cart
          </Link>
        </li>
      </ul>
      <button type="button" className="logout-desk-btn">
        Logout
      </button>
      <button type="button" className="logout-mobile-btn">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png "
          alt="nav logout"
          className="logout-icon"
        />
      </button>
    </div>
    <ul className="mobile-header">
      <li>
        <Link to="/">
          <button type="button" className="mobile-header-btn">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
              alt="nav home"
              className="mobile-header-logo"
            />
          </button>
        </Link>
      </li>
      <li>
        <Link to="/products">
          <button type="button" className="mobile-header-btn">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
              alt="nav products"
              className="mobile-header-logo"
            />
          </button>
        </Link>
      </li>
      <li>
        <Link to="/cart">
          <button type="button" className="mobile-header-btn">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png "
              alt="nav cart"
              className="mobile-header-logo"
            />
          </button>
        </Link>
      </li>
    </ul>
  </nav>
)
export default Header
