import React,{ useState, useEffect } from "react"
import Status from "./Status"
import "./styling/Stations.css"

const CustomMarker = (props) => {

    const [show, setShow] = useState(false)

    useEffect(() => {
        if(props.chosenStatus.length > 0){
            if(props.chosenStatus[0].station_id === props.id){
                setShow(true)
            } else {
                setShow(false)
            }
        }
        else {
            setShow(false)
        }
    },[props.chosenStatus])

    return(
        <div className="customMarker" onClick={() => {props.onMarkerClicked(props.id)}}>
            {props.text}
            {show &&
                <Status chosenStation={props.chosenStation[0]} chosenStatus={props.chosenStatus[0]}/>
            }
        </div>
    )
}

export default CustomMarker