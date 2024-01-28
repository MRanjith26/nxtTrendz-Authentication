// Write your JS code here
import './index.css'
import {Component} from 'react'

class LoginForm extends Component {
  state = {username: '', password: '', isLogin: true, errorMsg: ''}

  AddUsername = event => {
    this.setState({username: event.target.value})
  }

  AddPassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  onSubmitSuccess = () => {
    this.setState({isLogin: true})
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = () => {
    this.setState({isLogin: false})
  }

  onFormSubmit = async event => {
    const {username, password} = this.state
    event.preventDefault()
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch('https://apis.ccbp.in/login', options)

    const data = await response.json()
    console.log(data)

    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.onSubmitFailure()
      this.setState({errorMsg: data.error_msg})
    }
  }

  renderNameInputField = () => {
    const {username} = this.state
    return (
      <>
        <label htmlFor="name" className="login-label">
          USERNAME
        </label>
        <input
          type="text"
          placeholder="Username"
          id="name"
          className="input-text"
          value={username}
          onChange={this.AddUsername}
        />
      </>
    )
  }

  renderPasswordInputField = () => {
    const {password} = this.state
    return (
      <>
        <label htmlFor="password" className="login-label">
          PASSWORD
        </label>
        <input
          type="password"
          placeholder="Password"
          id="password"
          className="input-text"
          value={password}
          onChange={this.AddPassword}
        />
      </>
    )
  }

  render() {
    const {isLogin, errorMsg} = this.state

    return (
      <div className="login-container">
        <div className="img-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            className="login-mobile-image"
            alt="website logo"
          />
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          className="login-image"
          alt="website login"
        />
        <form className="login-form" onSubmit={this.onFormSubmit}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            className="login-desktop-image"
            alt="website logo"
          />
          <div className="name-container">{this.renderNameInputField()}</div>
          <div className="password-container">
            {this.renderPasswordInputField()}
          </div>
          <button type="submit" className="form-button">
            Login
          </button>
          {!isLogin && <p className="error-msg">{errorMsg}</p>}
        </form>
      </div>
    )
  }
}
export default LoginForm
