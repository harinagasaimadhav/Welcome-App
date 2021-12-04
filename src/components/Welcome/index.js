// Write your code here

import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  scbscribed = () => {
    this.setState({isSubscribed: true})
  }

  notScbscribed = () => {
    this.setState({isSubscribed: false})
  }

  render() {
    const {isSubscribed} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="title">Welcome</h1>
          <p className="description">Thank you! Happy Learning</p>
          {isSubscribed && (
            <button
              className="button"
              onClick={this.notScbscribed}
              type="button"
            >
              Subscribed
            </button>
          )}
          {!isSubscribed && (
            <button className="button" onClick={this.scbscribed} type="button">
              Subscribe
            </button>
          )}
        </div>
      </div>
    )
  }
}

export default Welcome
