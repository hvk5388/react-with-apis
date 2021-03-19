import React, { useState } from 'react';
import './AirportInfo.css';
import Flights from './Flights';

function AirportInfo() { 
    //set the querys and responses
    const [places,setPlaces] = useState([])
    const [currencies,setCurrencies] = useState([])
    const [flights,setFlights] = useState([])
    const [query2,setQuery2] = useState("")
    const [curQuery,setCurQuery]= useState("")
    const [outQuery,setOutQuery] = useState("")
    const [departQuery,setDepartQuery] = useState("")
    const [destQuery,setDestQuery] = useState("")
    const [showFlights,setShowFlights] = useState(false)

    //on submit
    function handleSubmit(e){
        e.preventDefault();
        //call api
        async function getMyAPI() {
                const reqFlights = {
                method:'GET',
                headers: {
                    "x-rapidapi-key": '40759afcbcmsh33253c61ac2d377p14f791jsn068a8b3badfd',
	                "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
	                "useQueryString": true
                }
            }

            //get query input
            const inboundpartialdate = {
                "inboundpartialdate": query2
            }

            const currency = curQuery

            const outboundpartialdate = outQuery

            const originplace = departQuery + '-sky'

            const destinationplace = destQuery + '-sky'

            //create an api call link
            const link = 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/' + currency + '/en-US/' + originplace + '/' + destinationplace + '/'+ outboundpartialdate +'?' + new URLSearchParams(inboundpartialdate)

            //test that the link is correct
            console.log(link)

            //call teh api and set the response to response2
            let response2 = await fetch(link, reqFlights)

            response2 = await response2.json()
            setFlights(response2.Quotes)
            setPlaces(response2.Places)
            setCurrencies(response2.Currencies)
            console.log(response2)
        }

        getMyAPI()
        setOutQuery("")
        setQuery2("")
        setCurQuery("")
        setDepartQuery("")
        setDestQuery("")
        setShowFlights(true)
    }

    //returns the input form to get user querys and shows the output
    return <div className="airportinfo">
        <form onSubmit={handleSubmit}>
            <label htmlFor="inboundDate">
                Inbound Date(yyyy-mm-dd):
            </label>
            <input id="queryInput" value={query2} onChange={(e) => setQuery2(e.target.value)} required/>
            <label htmlFor="outboundDate">
                Outbound Date(yyyy-mm-dd):
            </label>
            <input id="queryInput" value={outQuery} onChange={(e) => setOutQuery(e.target.value)} required/>
            <label htmlFor="currency">
                Currency:
            </label>
            <input id="queryInput" value={curQuery} onChange={(e) => setCurQuery(e.target.value)} required/>
            <label htmlFor="outboundCity">
                Departure Location (Airport Code):
            </label>
            <input id="queryInput" value={departQuery} onChange={(e) => setDepartQuery(e.target.value)} required/>
            <label htmlFor="inboundCity">
                Destination Location (Airport Code):
            </label>
            <input id="queryInput" value={destQuery} onChange={(e) => setDestQuery(e.target.value)} required/>
            <button className="search">Search</button>
        </form>
        {showFlights ? <Flights flights={flights} places={places} currencies={currencies}></Flights> : <></>}         
    </div>
}

export default AirportInfo;
