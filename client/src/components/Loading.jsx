import React from 'react'

const Loading = props => {
  return (
    <div className='loading'>
      <h1>STELLAR</h1>
      <img alt='loading icon' src={require('../assets/loading-circle.svg')} />
      <div className='loading-text-line'>
        <img alt='check-circle' src={require('../assets/check-circle.jpg')} />
        <p>Earn and use Stellar Rewards</p>
      </div>
      <div className='loading-text-line'>
        <img alt='dollar-circle' src={require('../assets/dollar-circle.svg')} />
        <p>Get price guarantee</p>
      </div>
      <div className='loading-text-line'>
        <img alt='phone-circle' src={require('../assets/phone-circle.svg')} />
        <p>Book fast with our free mobile apps</p>
      </div>
    </div>
  )
}

export default Loading
