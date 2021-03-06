# Stellar
​
​
## Project Description
Stellar is a travel booking website specializing in eco-friendly travel arrangements.

​
**Team Members**
- Akila Saraty (UX Designer)
- Emily Carlson (UX Designer)
- Susan Choi (UX Designer)
- Errol Highberg (Frontend Engineer)
- Jeremy Taubman (Backend Engineer)
- Jose Maldonaldo (Frontend Engineer)
​
## Wireframes
​
![Landing Page](https://res.cloudinary.com/dqjampdqg/image/upload/v1581705726/1._Home_uf8gww.png)
![Hotel Booking (PMVP)](https://res.cloudinary.com/dqjampdqg/image/upload/v1581705729/4._Hotel_Choosing_Page_e9zbnr.png)
![Flight Selection](https://res.cloudinary.com/dqjampdqg/image/upload/v1581705741/7._Departure_Flights_page_tcl3uh.png)
![Itinerary Review](https://res.cloudinary.com/dqjampdqg/image/upload/v1581705746/12._Trip_Review_page_ppbrn4.png)
![Mobile Donation](https://res.cloudinary.com/dqjampdqg/image/upload/v1581705748/Mobile_donation_page_fdczpd.png)
![Mobile Landing Page](https://res.cloudinary.com/dqjampdqg/image/upload/v1581705751/Mobile_Homepage_yl8wyy.png)
​
## MVP
​
- User can book flights between locations
- Eco-friendly itinerary filtering
- Donation box on booking confirmation
- Hotel / Airline rating
​
## Post-MVP
​
- Hotel booking
- Mobile support
- Passenger details
- User signup
- User authentication
- Input Validation
- Additional flight options (more baggage, etc.)
- Many itineraries per user
- Eco popup should not clear form
​
​
## ERD Diagram
​
![ERD](https://i.imgur.com/0PxZFUG.png)
​
## Endpoints
​
​
PMVP Items in parentheses
​
- GET `/api/users`
	- Index route returning an array of all Users
- GET `/api/users/:id`
	- Show route for a user requested by ID (and active itineraries)
- (POST `/api/users`)
	- Create route to signup a new user
  
  
- GET `/api/users/:user_id/arrivingflight`
  - Show a user's arriving flight
  
- GET `/api/users/:user_id/departingflight`

  - Show a user's departing flight
  
- POST `/api/users`
  - Create a new user
  
- PUT `/api/users/:user_id`
  - Change user info
  
- DELETE `/api/users/:user_id`
  - Delete user
​
  
​
​
Sample JSON from GET `/api/users/:user_id/itineraries/:id`
​
  ```
  {
    "user": {
        "id": 4,
        "name": "Thelonious Monk",
        "hashed_password": "password",
        "number_adults": 1,
        "number_children": 1,
        "departingFlightId": 3,
        "arrivingFlightId": 2,
        "createdAt": "2020-02-19T18:41:28.563Z",
        "updatedAt": "2020-02-19T18:41:28.563Z"
    }
   }


  ```
  ```
     {
    "departingFlight": {
        "id": 2,
        "airline": "American",
        "depart_airport": "JFK",
        "arrival_airport": "SFO",
        "price": 470.22,
        "flight_number": "66646",
        "depart_time": "2020-02-19T18:41:28.515Z",
        "arrival_time": "2020-02-19T22:41:28.515Z",
        "rating": 5,
        "eco": true,
        "createdAt": "2020-02-19T18:41:28.515Z",
        "updatedAt": "2020-02-19T18:41:28.515Z"
    } }
  
   ```
​
​
## React Component Hierarchy
![Component Hierarchy](https://res.cloudinary.com/dqjampdqg/image/upload/v1581718102/React_Component_Hierarchy_1_fyxlpt.png)
​
## Components
​

| Component | Description | 
| --- | :--- |
| App | This component will render the Main and Loading component. |
| Main | This will be a class component that will track state for departure/destination location, to/from date, adults/kids user is booking a flight(s) for, selected flight. |
| Home | This component will render a form and eco friendly popup that will give the user information on what it means to be ecofriendly.  | 
| Loading | This functional component will render a loading icon after a user clicks search from the homepage. |
| Flights | This functional component will render the flight filter and flight card component. |
| Hotels | This functional component will render the hotel filter and hotel card component. |
| Trip Review | This functional component will render a flight summary component that displays appropriate information about the flights chosen and a receipt component that shows all of the associated fees. |
| Book | This functional component will render customer form where a user will input their personal information to book the flight and a donation component that will allow a user to donate to ecofriendly organizations. |
| Confirmation  | This functional component will render a green checkmark and text notifying a user that their booking is confirmed. |
​
## Priority Matrix
​
![Priority Matrix](https://i.imgur.com/AZ12gga.jpg)
​
## Timeframes
| Component | Priority | Estimated Time | Time Invested | 
| --- | :---: | :---: | :---: |
| Prep work - wireframes/ERD/comp hierarchy | H | 9hrs | 9hrs |
| Setting up back end data | H | 7hrs | 10hrs |
| CRUD back end functionality | H | 10hrs | 20hrs | 
| Setting up React components | H | 12hrs | 12hrs |
| React Functionality (Links/Forms) | H | 10-12hrs | 15hrs | 
| Adding all button functionality | H | 10-12hrs | 10hrs |
| ‘Green / Eco ’ Button functions | H | 5hrs | 3hrs |
| Math functions | H | 5-7hrs | 2hrs |
| Meeting with UX to discuss progress/problems | H | 40m/day | 1hr |
| Post MVP functions (Hotels, Cars, Activities) | L | 10hrs | |
| Style - Matching UX design | H | 18hrs | 30hrs |
| Total | H | 100 hrs| 122hrs |
​
​
## Additional Libraries
- axios - Simple API requests
- react-router-dom - Route users around single page app
- nodemon - Automatic server restarts on code change
- moment, react-moment - Simpler date handling
- morgan - Logging HTTP requests
- sequelize - Database setup and management
- pg - JS interface with postgreSQL
- formik - Less verbose React forms
- jest - Testing framework
- supertest - Testing framework
- chance - Random string generation
​
​
## Expected Issues
Disagreement over which features are important / implementable in a reasonable time.
​
## Issues and Resolutions
One of our core features (the "Green Option" button) was in an out-of-the-way location; we consulted with our design team, and with their advice we left it in place.

Many-to-many associations in Sequelize, even with a join table, proved to be very complicated and finicky; so we limited each user to a single itinerary, and combined the itinerary information into the User table.

To avoid having Many flights to Many users, made duplicate ArrivingFlights and DepartingFlights so that we have 2 many-to-one associations.
Eco-friendly popup clears form, remains unresolved.

We needed the flights component to re-render after a user selects their first flight, this could've been avoided by creating a new component for returning flights, however it gave us the chance to learn something new. Thanks to this [Stack Overflow Post](https://stackoverflow.com/questions/53215285/how-can-i-force-component-to-re-render-with-hooks-in-react/58360674#58360674) we were able to force the component to rerender that portion of the page.
​
## Code Snippet
​
​
Backend -> User associations is not particularly impressive, but we got it to work using duplicate tables rather than using a number of Join tables and Many-Many relations.
```
  User.associate = function(models) {
    User.belongsTo(models.DepartingFlight, {
      foreignKey: 'departingFlightId'
    });
    User.belongsTo(models.ArrivingFlight, {
      foreignKey: 'arrivingFlightId'
    });
  };
  return User;
};
```
​
## Change Log
​
Moved itinerary information to the User table, and eliminated the Itinerary and ItineraryFlight tables.
Moved mobile support to post-MVP.

