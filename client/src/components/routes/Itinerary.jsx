import React from 'react'
import moment from 'moment'
import Chance from 'chance'
const chance = new Chance()

export default function Itinerary(props) {
  console.log(props.user)
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

  return (
    <div className="itinerary-container">
      <p>Your Flight Confirmation for {moment(departureDate).format('dddd, MMMM Do, YYYY')}</p>
      <p>Confirmation Code: #{confirmationCode}</p>
      <p>Passengers: {name}</p>
      <p>Ticket Number: {ticketNumber}</p>
      <div className="itinerary-flight-container">
        <p>{departingFlightTime}</p>
        <p>Operated by {departingAirline} </p>
        <p>{departingDuration}hrs</p>
        <p>Depart: {departingFrom}</p>
        <p>Arrive: {arrivingTo}</p>
      </div>
      <div className="itinerary-flight-container">
        <p>{arrivingFlightTime}</p>
        <p>Operated by {arrivingAirline} </p>
        <p>{arrivingDuration}hrs</p>
        <p>Depart: {arrivingTo}</p>
        <p>Arrive: {departingFrom}</p>
      </div>
      <div className="itinerary-rules">
        <ul>
          <p>The following restrictions apply:</p>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, possimus. Laboriosam nam adipisci molestias sapiente cum aut, cupiditate voluptatem ipsa laudantium nisi a. Magni temporibus officiis commodi, quia cupiditate perspiciatis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore fugit excepturi unde voluptas fuga? Eveniet, maiores eos laborum possimus facilis earum doloremque, nobis libero deserunt velit, sed quos obcaecati. Voluptates.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, possimus. Laboriosam nam adipisci molestias sapiente cum aut, cupiditate voluptatem ipsa laudantium nisi a. Magni temporibus officiis commodi, quia cupiditate perspiciatis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore fugit excepturi unde voluptas fuga? Eveniet, maiores eos laborum possimus facilis earum doloremque, nobis libero deserunt velit, sed quos obcaecati. Voluptates.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, possimus. Laboriosam nam adipisci molestias sapiente cum aut, cupiditate voluptatem ipsa laudantium nisi a. Magni temporibus officiis commodi, quia cupiditate perspiciatis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore fugit excepturi unde voluptas fuga? Eveniet, maiores eos laborum possimus facilis earum doloremque, nobis libero deserunt velit, sed quos obcaecati. Voluptates.</li>
        </ul>
      </div>
    </div>
  )
}
