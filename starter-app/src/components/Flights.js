import React from 'react';
import './Flights.css';

function Flights(props) { 
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
                        return (<tr>
                            <td>{flight.MinPrice}</td>
                            <td>{flight.QuoteDateTime}</td>
                            <td>{flight.Name}</td>
                            <td>{flight.Name}</td>
                            <td>{flight.Code}</td>
                        </tr>)
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Flights;