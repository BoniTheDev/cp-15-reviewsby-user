// Write your code here

import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {userIndex: 0}

  clickOnRightArrow = () => {
    const {userIndex} = this.state
    const {reviewsList} = this.props

    if (userIndex === reviewsList.length - 1) {
      this.setState(prevState => ({
        userIndex: prevState.userIndex,
      }))
    } else {
      this.setState(prevState => ({
        userIndex: prevState.userIndex + 1,
      }))
    }
  }

  clickOnLeftArrow = () => {
    const {userIndex} = this.state

    if (userIndex === 0) {
      this.setState(prevState => ({
        userIndex: prevState.userIndex,
      }))
    } else {
      this.setState(prevState => ({
        userIndex: prevState.userIndex - 1,
      }))
    }
  }

  render() {
    const {reviewsList} = this.props

    const {userIndex} = this.state

    const {imgUrl, username, companyName, description} = reviewsList[userIndex]

    return (
      <div className="app-container">
        <h1 className="app-heading">Reviews</h1>
        <div className="review-body">
          <button
            type="button"
            testid="leftArrow"
            className="arrow-btn"
            onClick={this.clickOnLeftArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
            />
          </button>
          <div className="review-container">
            <img src={imgUrl} alt={username} />
            <p className="user-name">{username}</p>
            <p className="company-text">{companyName}</p>
            <p className="company-text">{description}</p>
          </div>
          <button
            type="button"
            testid="rightArrow"
            className="arrow-btn"
            onClick={this.clickOnRightArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
