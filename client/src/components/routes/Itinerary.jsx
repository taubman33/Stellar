import React from 'react'
import moment from 'moment'
import Chance from 'chance'
const chance = new Chance()

export default function Itinerary(props) {
  const confirmationCode = chance.string({ length: 6, casing: 'upper', alpha: true, numeric: true })
  const { departureDate } = props.itinerary
  const { name } = props.user.user
  const ticketNumber = chance.string({ length: 13, alpha: false, numeric: true })
  const departingAirline = props.bookedFlights.departing.airline
  const departingDuration = props.bookedFlights.departing.flightDuration
  const departingFrom = props.itinerary.flyingFrom
  const arrivingTo = props.itinerary.flyingTo
  const departingFlightTime = `${props.bookedFlights.departing.departingTime} - ${props.bookedFlights.departing.arrivingTime}`
  const arrivingAirline = props.bookedFlights.arriving.airline
  const arrivingDuration = props.bookedFlights.arriving.flightDuration
  const arrivingFlightTime = `${props.bookedFlights.arriving.departingTime} - ${props.bookedFlights.departing.arrivingTime}`
  let totalPrice = ((props.bookedFlights.departing.flightPrice + props.bookedFlights.arriving.flightPrice) * 0.95).toFixed(2)

  if (props.donation) {
    totalPrice = Math.ceil(totalPrice)
  }

  return (
    <div className="itinerary-container">
      <p>Your Flight Confirmation for {moment(departureDate).format('dddd, MMMM Do, YYYY')} <br />
        Confirmation Code: #{confirmationCode} <br />
        Passengers: {name} <br />
        Ticket Number: {ticketNumber} <br /> </p>


      <div className="itinerary-flight-container">
        <p>{departingFlightTime} <br />
          Operated by {departingAirline} <br />
          Flight Duration: {departingDuration}hrs <br />
          Depart: {departingFrom} <br />
          Arrive: {arrivingTo} <br /></p>
      </div>
      <div className="itinerary-flight-container">
        <p>{arrivingFlightTime} <br />
          Operated by {arrivingAirline} <br />
          Flight Duration: {arrivingDuration}hrs <br />
          Depart: {arrivingTo} <br />
          Arrive: {departingFrom}</p>
      </div>
      <div>
        <p>Total Price: ${totalPrice}</p>
      </div>
      <div className="itinerary-rules">
        <p>The following restrictions apply:
          <ul>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, possimus. Laboriosam nam adipisci molestias sapiente cum aut, cupiditate voluptatem ipsa laudantium nisi a. Magni temporibus officiis commodi, quia cupiditate perspiciatis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore fugit excepturi unde voluptas fuga? Eveniet, maiores eos laborum possimus facilis earum doloremque, nobis libero deserunt velit, sed quos obcaecati. Voluptates.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, possimus. Laboriosam nam adipisci molestias sapiente cum aut, cupiditate voluptatem ipsa laudantium nisi a. Magni temporibus officiis commodi, quia cupiditate perspiciatis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore fugit excepturi unde voluptas fuga? Eveniet, maiores eos laborum possimus facilis earum doloremque, nobis libero deserunt velit, sed quos obcaecati. Voluptates.</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, possimus. Laboriosam nam adipisci molestias sapiente cum aut, cupiditate voluptatem ipsa laudantium nisi a. Magni temporibus officiis commodi, quia cupiditate perspiciatis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore fugit excepturi unde voluptas fuga? Eveniet, maiores eos laborum possimus facilis earum doloremque, nobis libero deserunt velit, sed quos obcaecati. Voluptates.</li>
          </ul>
        </p>
      </div>
    </div>
  )
}
