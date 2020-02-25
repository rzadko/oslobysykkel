import React, { useState, useEffect } from "react"
import "./App.css"
import GoogleMap from "google-map-react"
import Stations from "./Stations"
import CustomMarker from "./CustomMarker"

const Maps = (props) => { 

    const [zoom, setZoom] = useState(12)
    const [search, setSearch] = useState("")
    const [status, setStatus] = useState([])
    const [filter, setFilter] = useState([])
    const [show, setShow] = useState(false)
    const [chosenStation, setChosenStation] = useState({})
    const [chosenStatus, setChosenStatus] = useState({})

    useEffect(() => {
        getData()
    },[props.stations])

    useEffect(()=> {
      const result = props.stations.filter( searched => searched.name.toLowerCase().includes(search))
      setFilter(result)
  },[search])

    const getData = async () =>{
        const res = await fetch("https://gbfs.urbansharing.com/oslobysykkel.no/station_status.json")
        const data = await res.json()
        setStatus(data.data.stations)
    }

    const updateSearch = e => {
        setSearch(e.target.value)
      }

    const selectedMarker = (stationId) => {
      const stationResult = props.stations.filter( station => station.station_id === stationId)
      setChosenStation(stationResult)

      const statusResult = status.filter( status => status.station_id === stationId)
      setChosenStatus(statusResult)
    }
    
    return(
      <div className="mainContainer">
          <Stations className="stations" status={status} stations={filter.length > 0 ? filter : props.stations} search={search} onListItemClicked={selectedMarker}/>
          <div className="search">
              <input className="searchInput" type="text" value={search} onChange={(e) => updateSearch(e)}></input>
              <button className="searchButton" onClick={() => setSearch("")}>x</button>
          </div>
          <GoogleMap
            className="gMap"
            bootstrapURLKeys={{ key: "AIzaSyAe9A5xkd_WgMh6JqgsaUeWRW6bi-wuyyk" }}
            defaultCenter={{lat: 59.91273, lng: 10.758594919923468}}
            defaultZoom={zoom}
          >
            {filter.length > 0 ? 
            filter.map( mapped => (
              <CustomMarker
              key={mapped.station_id}
              id={mapped.station_id}
              show={show}
              lat={mapped.lat}
              lng={mapped.lon}
              text={mapped.capacity}
              onMarkerClicked={selectedMarker}
              chosenStation={chosenStation}
              chosenStatus={chosenStatus}
              />
            ))
            :
            props.stations.map( mapped => (
              <CustomMarker
              key={mapped.station_id}
              id={mapped.station_id}
              show={show}
              lat={mapped.lat}
              lng={mapped.lon}
              text={mapped.capacity}
              onMarkerClicked={selectedMarker}
              chosenStation={chosenStation}
              chosenStatus={chosenStatus}
              />
              ))
            }
          </GoogleMap>
      </div>
    )
}



export default Maps
    