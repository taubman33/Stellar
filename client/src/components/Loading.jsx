import React from 'react'
import '../css/Loading.css'

const Loading = props => {
  return (
    <div className='loading'>
      <h1 className='big-logo-loading'>STELLAR</h1>
      <img alt='loading icon' src={require('../assets/loading-circle.svg')} className='loading-icon'/>
      <div className='loading-lines'>
        <p className='loading-text-line'>
          <img alt='check-circle' src={require('../assets/check-circle.jpg')} />
          Earn and use Stellar Rewards
        </p>
        <p className='loading-text-line'>
          <img alt='dollar-circle' src={require('../assets/dollar-circle.svg')} />
          Get price guarantee
        </p>
        <p className='loading-text-line'>
          <img alt='phone-circle' src={require('../assets/phone-circle.svg')} />
          Book fast with our free mobile apps
        </p>
      </div>
    </div>
  )
}

export default Loading
