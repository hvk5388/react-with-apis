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
                <tbody>
                    {props.flights.map(flight => {
                        return (
                            <tr key={flight.QuoteId}>
                                <td>{flight.MinPrice}</td>
                                <td>{flight.OutboundLeg.DepartureDate}</td>
                                {/* <td>{flight.Name}</td> */}
                                <td>{placeName(props.places, flight.OutboundLeg.OriginId)}</td>
                                <td>{placeName(props.places, flight.OutboundLeg.DestinationId)}</td> 
                                <td>{flight.Code}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

function placeName(places, placeId){
    var place;
    var i;
    for(i = 0; i < places.length; i++){
        if(places[i].PlaceId === placeId){
            return places[i].Name
        }
    }
    return ("city does not exist")

    // for(i=0; i<10; i++){
    //     place = places[i]
    //     console.log(i)
    //     console.log(places.length)

    // // }
    // // for (place in Object.values(places)){
    //     console.log("place.PlaceId")
    //     console.log(place)
    //     console.log(place.PlaceId)
    //     console.log(placeId)
    //     if(place.PlaceID === placeId){
    //         return place.Name
    //     } else {
    //         return ("City does not exist")
    //     }
    // }
}

export default Flights;