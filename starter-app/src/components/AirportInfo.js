import React, { useState } from 'react';
import './AirportInfo.css';
// import Places from './Places';
import Flights from './Flights';

function AirportInfo() { 
    const [places,setPlaces] = useState([])
    const [currencies,setCurrencies] = useState([])
    // const [query,setQuery] = useState("")
    // const [showPlaces,setShowPlaces] = useState(false)
    const [flights,setFlights] = useState([])
    const [query2,setQuery2] = useState("")
    const [curQuery,setCurQuery]= useState("")
    const [outQuery,setOutQuery] = useState("")
    const [showFlights,setShowFlights] = useState(false)

    function handleSubmit(e){
        e.preventDefault();
        async function getMyAPI() {
                const reqFlights = {
                method:'GET',
                headers: {
                    "x-rapidapi-key": '40759afcbcmsh33253c61ac2d377p14f791jsn068a8b3badfd',
	                "x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
	                "useQueryString": true
                }
            }

            const inboundpartialdate = {
                "query2": query2
            }

            const currency = curQuery
            // {
            //     "curQuery": curQuery
            // }

            const outboundpartialdate = {
                "outQuery": outQuery
            }

            // let response2 = await fetch('https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/SFO-sky/JFK-sky/'+ outboundpartialdate + '?' 
            // + new URLSearchParams(inboundpartialdate),
            // // + new URLSearchParams(outboundpartialdate),
            //     reqFlights)

            const link = 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/' + currency + '/en-US/SFO-sky/JFK-sky/2021-03-21'
            // + new URLSearchParams(inboundpartialdate)

            console.log(link)

            let response2 = await fetch(link 
            
            // + new URLSearchParams(currencies)
            ,
                reqFlights)

            // let response2 = await fetch('https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/' + currency + '/en-US/SFO-sky/JFK-sky/2021/03/21' 
            // + new URLSearchParams(inboundpartialdate),
            // // + new URLSearchParams(currency),
            //     reqFlights)

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
        setShowFlights(true)
    }

    return <div className="airportinfo">
        <form onSubmit={handleSubmit}>
            <label htmlFor="inboundDate">
                Inbound Date(yyyy-mm-dd):
            </label>
            <input id="queryInput" value={query2} onChange={(e) => setQuery2(e.target.value)} required/>
            <label htmlFor="currency">
                Currency:
            </label>
            <input id="queryInput" value={curQuery} onChange={(e) => setCurQuery(e.target.value)} required/>
            {/* <label htmlFor="outboundDate">
                Outbound Date(yyyy-mm-dd):
            </label>
            <input id="queryInput" value={outQuery} onChange={(e) => setOutQuery(e.target.value)} required/> */}
            <button className="search">Search</button>
        </form>
        {/* {showPlaces ? <Places places={places}></Places> : <></>} */}
        {showFlights ? <Flights flights={flights} places={places} currencies={currencies}></Flights> : <></>}
        
    </div>
}

export default AirportInfo;
