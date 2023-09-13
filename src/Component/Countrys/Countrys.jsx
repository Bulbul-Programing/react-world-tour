import { useEffect, useState } from "react";
import Country from '../Country/Country'
import VisitedCountry from "../Visited-contry/VisitedCountry";

const Countrys = () => {

    const [country, setCountry] = useState([])

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountry(data))
    },[])

    const [visited, setVisited] = useState([])

    const handleClicked = (country) => {
        const setVisitedPlace = [...visited , country]
        setVisited(setVisitedPlace)
    }

    return (
        <div>
            <div className="border-4 border-blue-300 p-5 m-10 rounded-md text-center">
                <h1 className="text-3xl font-bold ">My visited Country</h1>
                <div className="flex flex-wrap mx-9 gap-3 my-4">
                {
                    visited.map(visContry => <VisitedCountry key={visContry.ccn3} visited = {visContry}></VisitedCountry> )
                }
                </div>
            </div>
            <div className="grid grid-cols-3 gap-4 m-20">
                {
                    country.map(country => <Country key={country.cca2} country= {country} handleClicked = {handleClicked}></Country>)
                }   
            </div>
        </div>
    );
};

export default Countrys;