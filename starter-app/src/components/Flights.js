import React from 'react';
import './Flights.css';

function Flights(props) {
    return(
        <div className="flights">
            <table>
                <thead>
                    <tr>
                        {/* headings */}
                        <th>Minimum Price</th>
                        <th>Date</th>
                        <th>Departure City</th>
                        <th>Incoming City</th>
                        <th>Currency</th>
                    </tr>
                </thead>
                <tbody>
                    {/* map the response */}
                    {props.flights.map(flight => {
                        return (
                            // print the output in the table
                            <tr key={flight.QuoteId}>
                                <td>{flight.MinPrice}</td>
                                <td>{flight.OutboundLeg.DepartureDate}</td>
                                <td>{placeName(props.places, flight.OutboundLeg.OriginId)}</td>
                                <td>{placeName(props.places, flight.OutboundLeg.DestinationId)}</td> 
                                <td>{currencyName(props.currencies)}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

//get currency
function currencyName(currencies){
    if(currencies.length<1){
        return("Currency not defined")
    }
    return(currencies[0].Code)
}

//get place name based on destination and origin id 
function placeName(places, placeId){
    var i;
    for(i = 0; i < places.length; i++){
        if(places[i].PlaceId === placeId){
            return places[i].Name
        }
    }
    return ("city does not exist")
}

export default Flights;