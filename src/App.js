import React from "react"
import "./App.css"
//import Business from "./Components/Business/Business"
import BusinessList from "./Components/BusinessList/BusinessList"
import SearchBar from "./Components/SearchBar/SearchBar"

function App() {
  return (
    <div>
      <h1>Hello Im the APP component</h1>
      {/* <Business/> */}
      <SearchBar />
      <BusinessList/>
    </div>
  );
}

export default App;
