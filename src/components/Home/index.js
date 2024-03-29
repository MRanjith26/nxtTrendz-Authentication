// Write your JS code here
import './index.css'
import Header from '../Header/index'

const Home = () => (
  <>
    <Header />
    <div className="home-container">
      <div className="home-content">
        <h1 className="content-title">Clothes That Get You Noticed</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png "
          alt="clothes that get you noticed"
          className="home-mobile-image"
        />
        <p className="content-description">
          Fashion is part of the daily air and it changes all the time. Clothes
          have always been a marker of the era and we are in a revolution. Your
          fashion makes you been seen and heard that way you are. So,celebrate
          the seasons new and exciting fashion in your own way.
        </p>
        <button className="content-button" type="button">
          Shop Now
        </button>
      </div>
      <div className="image-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png "
          alt="clothes that get you noticed"
          className="home-desk-image"
        />
      </div>
    </div>
  </>
)
export default Home
