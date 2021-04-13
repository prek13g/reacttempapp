import React, { useEffect, useState } from 'react';
import "./index.css";

const Tempapp=()=>{

   const [city,setCity]=useState(null);
   const [search,setsearch]=useState("mumbai");

   useEffect( ()=>{
       const fetchapi = async ()=> {
           const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=60f9d25828e1f596d42f706427e0a138`
           const response = await fetch(url);
           const resJson = await response.json();
           //json format me return krr rha hae
           //agar json me convert nahi kiya to uncaught in promises wali error aayegi
           setCity(resJson.main);
        //    pure api me se khali main wala data
       }
       fetchapi();
   },[search])
   //mtlb jb jb set search hogi fetchapi() ko call krna h 

    return(<>
        <div className="box">
             <div className="inputData">
                 <input 
                     value={search}
                     type="search"
                     className="inputField"
                     onChange={(event)=>{
                         setsearch(event.target.value);
                     }}
                     />
             </div>

        {!city ? (<p className="errorMsg">No data found</p>
        ):(
            <>
            <div className="info">
            <h2 className="location">
            <i className="fas fa-street-view"></i>{search}
            </h2>
            <h1 className="temp">
                {city.temp}°C
                {/* us api k andar tha ye, city->main->temp */}
            </h1>
            <h3 className="tempmin_max">{city.temp_min}°C|{city.temp_max}°C</h3>   
        </div>

        <div className="wave -one"></div>
        <div className="wave -two"></div>
        <div className="wave -three"></div>
        
        </>)}     
        </div>
    </>)
}
export default Tempapp;



//api.openweathermap.org/data/2.5/weather?q=pune&appid=60f9d25828e1f596d42f706427e0a138