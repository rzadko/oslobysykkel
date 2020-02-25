import React, { useState, useEffect } from "react"
import "./styling/Stations.css"

const Status = (props) => {

    return( 
        <div className="markerBox">
            
            <div className="bubble">
                <div className="bubbleText">
                    <h1>{props.chosenStation.name}</h1>
                    <h3>{props.chosenStation.address}</h3>
                    <p>Antall tilgjengelige sykkler: {props.chosenStatus.num_bikes_available}</p>
                    <p>Antall tilgjengelige låser: {props.chosenStatus.num_docks_available}</p>
                </div>
            </div>
        </div>
        
    )

}

export default Status