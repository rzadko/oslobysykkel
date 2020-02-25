import React, { useState, useEffect } from 'react';
import './App.css';
import Maps from "./Maps"

function App() {

  const [stations, setStations] = useState([])

  useEffect(() => {
    getData()
  },[])

  const getData = async () =>{
    const res = await fetch("https://gbfs.urbansharing.com/oslobysykkel.no/station_information.json")
    const data = await res.json()
    setStations(data.data.stations)

  }

  return (
    <div className="App">
      <img className="logo" height="208px" width="500px" src={require("./styling/bysykkel_logo.png")} alt="logo"/>
      <div className="view">
        <Maps stations={stations}/>
      </div>
    </div>
  );
}

export default App;
