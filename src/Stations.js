import React, { useState, useEffect } from "react"
import "./styling/Stations.css"

const Stations = (props) => {
    const [stations, setStations] = useState([])

    useEffect(() => {
        setStations(props.stations)
    },[props.stations])

    
    return(
        <div className="listView">
            <div className="title">Velg din stasjon</div>
            <div className="list">
                {stations.map(station => (
                    <div className="listContent" key={station.station_id} 
                    onClick={() => {
                        props.onListItemClicked(station.station_id)
                    }}>
                        <div className="bike"> 
                            <img
                                src={require(`./styling/bike.png`)}
                                alt="bike" 
                            />
                        </div>
                        <div className="stationDetails">
                            <div className="stationName">{station.name}</div>
                            <div className="stationAddress">{station.address}</div>
                            <br/>
                            <br/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
        
    )
}

export default Stations