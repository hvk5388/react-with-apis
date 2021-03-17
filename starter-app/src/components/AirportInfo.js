import React, { useState } from 'react';
import './AirportInfo.css';
import Places from './Places';
import Flights from './Flights';

function AirportInfo() { 
    // const [places,setPlaces] = useState([])
    // const [query,setQuery] = useState("")
    // const [showPlaces,setShowPlaces] = useState(false)
    const [flights,setFlights] = useState([])
    const [query2,setQuery2] = useState("")
    const [curQuery,setCurQuery]= useState("")
    const [showFlights,setShowFlights] = useState(false)

    function handleSubmit(e){
        e.preventDefault();
        async function getMyAPI() {
            // const reqOptions = {
            //     method:'GET',
            //     headers: {
            //         "x-rapidapi-key": '40759afcbcmsh33253c61ac2d377p14f791jsn068a8b3badfd',
	        //         "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
	        //         "useQueryString": true
            //     }
            // }

            // const qString = {
            //     "query": query
            // }
            
            // let response = await fetch('https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/US/USD/en-US/?' 
            //     + new URLSearchParams(qString), 
            //     // + new URLSearchParams(qString2), 
            //     reqOptions)
            // response = await response.json()
            // setPlaces(response.Places)
            // console.log(response.Places)

            const reqFlights = {
                method:'GET',
                headers: {
                    "x-rapidapi-key": '40759afcbcmsh33253c61ac2d377p14f791jsn068a8b3badfd',
	                "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
	                "useQueryString": true
                }
            }

            const qString2 = {
                "query2": query2
            }

            const currency = {
                "curQuery": curQuery
            }

            // let response2 = await fetch('https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/' + currency + '/en-US/SFO-sky/JFK-sky/2021-03-20/?' 
            //     + new URLSearchParams(qString2),
            //     // + new URLSearchParams(currency), 
            //     reqFlights)

            let response2 = await fetch('https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/SFO-sky/JFK-sky/2021-03-17' 
                // + new URLSearchParams(qString2)
                ,
                reqFlights)

            response2 = await response2.json()
            setFlights(response2.Quotes)
            console.log(response2)
        }

        getMyAPI()
        //setQuery("")
        setQuery2("")
        setCurQuery("")
        //setShowPlaces(true)
        setShowFlights(true)
    }

    return <div className="airportinfo">
        <form onSubmit={handleSubmit}>
            {/* <label htmlFor="queryInput">
                Starting Location:
            </label>
            <input id="queryInput" value={query} onChange={(e) => setQuery(e.target.value)} required/> */}
            <label htmlFor="destination">
                Date:
            </label>
            <input id="queryInput" value={query2} onChange={(e) => setQuery2(e.target.value)} required/>
            <label htmlFor="currency">
                Currency:
            </label>
            <input id="queryInput" value={curQuery} onChange={(e) => setCurQuery(e.target.value)} required/>
            <button className="search">Search</button>
        </form>
        {/* {showPlaces ? <Places places={places}></Places> : <></>} */}
        {showFlights ? <Flights flights={flights}></Flights> : <></>}
    </div>
}

export default AirportInfo;
