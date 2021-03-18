import React from 'react';
import './Flights.css';

function Flights(props) {
    console.log("props.flights")
    console.log(props.flights)
    console.log(props)
    return(
        <div className="flights">
            <table>
                <thead>
                    <tr>
                        <th>Minimum Price</th>
                        <th>Date</th>
                        <th>Departure City</th>
                        <th>Incoming City</th>
                        <th>Currency</th>
                    </tr>
                </thead>
                {/* <tbody>
                    {props.flights.map(flight => {
                        return (
                            <tr>
                                <td>{flight.MinPrice}</td>
                                <td>{flight.OutboundLeg.DepartureDate}</td>
                                {/* <td>{flight.Name}</td> */}
                                {/* <td>{placeName(props.places, flight.OriginId)}</td>
                                <td>{placeName(props.places, flight.DestinationId)}</td> 
                                <td>{flight.Code}</td>
                            </tr>
                        )
                    })}
                </tbody> */}
            </table>
        </div>
    )
}

// function placeName(places, placeID){
//     for (place in places){
//         if(place.placeID == placeID){
//             return place.Name
//         } else {
//             return ("City does not exist")
//         }
//     }
// }

export default Flights;