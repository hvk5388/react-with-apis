import React from 'react';
import './Places.css';

function Places(props) { 
    return(
        <div className="places">
            <table>
                <thead>
                    <tr>
                        <th>Airport ID</th>
                        <th>Airport Name</th>
                        <th>Country ID</th>
                        <th>Region ID</th>
                        <th>City ID</th>
                        <th>Country Name</th>
                    </tr>
                </thead>
                <tbody>
                    {props.places.map(place => {
                        return (<tr>
                            <th>{place.Name}</th>
                            <th>{place.PlaceId}</th>
                        </tr>)
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Places;