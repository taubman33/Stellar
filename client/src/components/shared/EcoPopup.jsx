import React from 'react'
import '../../css/EcoPopup.css'

const EcoPopup = props => (
  <div className='eco-popup'>
    <div className='eco-popup-box'>
      <button>Close</button>
      <div className='eco-texts'>
        <p className='eco-title'>Eco-Friendly:</p>
        <p className='eco-content'>This symbol shows businesses that are certified environmentally friendly and boast sustainable practices</p>
        <p className='eco-title'>Sustainable practices include:</p>
        <ul className='eco-content'>
          <li className='eco-list-item'>Eco-Friendly filtered water dispensers</li>
          <li className='eco-list-item'>Consumable & durable goods</li>
          <li className='eco-list-item'>Sustainable toiletries provided</li>
          <li className='eco-list-item'>Green Rooftop</li>
          <li className='eco-list-item'>Renewable energy system</li>
          <li className='eco-list-item'>Dual Flush Toilets</li>
          <li className='eco-list-item'>Fuel-efficient engines</li>
        </ul>
      </div>
    </div>
  </div>
)

export default EcoPopup
