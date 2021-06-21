import React, {useState} from "react"
import "./App.css"
//import Business from "./Components/Business/Business"
import BusinessList from "./Components/BusinessList/BusinessList"
import SearchBar from "./Components/SearchBar/SearchBar"

const business = {
  imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  name: 'Joanna Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
}

const businesses = [
  business,
  business,
  business,
  business,
  business,
  business,
]


class App extends React.Component {

  searchYelp(term, location, sortBy) {
    console.log(`Searching Yelp with ${term}, ${location}, ${sortBy}`)
  }

  render() {
  return (
    <div>
      <h1>Hello Im the APP component</h1>
      {/* <Business/> */}
      <SearchBar searchYelp={this.searchYelp}/>
      <BusinessList businesses={businesses}/>
    </div>
  );
  }
}

export default App

