import './App.css';
import React, { useState } from "react";
import jsondata from "./test.json"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


function App() {
  const [startDate, setStartDate] = useState(new Date());
  const [place, setPlace] = useState("")
  const [cost, setCost] = useState("")
  const [propertyType, setpropertyType] = useState("");
  
  const handleCity = (e) => {
    setPlace(e.target.value)
  }

  const handleCost = (e) => {
    setCost(e.target.value)
  }
  const handleType = (e) => {
    setpropertyType(e.target.value)
  }


 
  let filterdata = jsondata.filter((data) => data.city === place && data.price >= cost && data.type === propertyType)
 


  
  
  return (
    <div className="App">
      <p className='header'>Search Properties to Rent</p>
      <div className='filters flex ml-10'>
        <div className='p-6'>
          <p>Location</p>
          <select value={place} onChange={handleCity}>
          <option value="pune">
              Pune
            </option>
            <option value="bangalore">
              Bangalore
            </option>
            <option value="chennai">
              Chennai
            </option>
          </select>
        </div>
        <div className='p-6'>
          <p>When</p>
          <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
        </div>
        <div className='p-6'>
          <p>Price</p>
          <select value={cost} onChange={handleCost}>
          <option value="3000" >
              3000 +
            </option>
          <option value="5000" >
              5000 +
            </option>
            <option value="7000">
              7000 +
            </option>
            <option value="9000">
              9000 +
            </option>
          </select>

        </div>
        <div className='p-6'>
          <p>Property Type</p>
          <select value={propertyType} onChange={handleType}>
            <option value="appartment" >
              Appartment
            </option>
            <option value="house" >
              House
            </option>
            <option value="villa">
              Villas
            </option>
          </select>
        </div>

        
      </div>
<div className='box'>
    { filterdata.length !== 0  ? ( 
        filterdata.map((property) => {
          return (
              <div className="max-w-xs bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <img className="rounded-t-lg" src={property.image} alt="product loading..." />
                <div className="p-5">
                  <div className='flex justify-between'>
                    <h3><strong>${property.price}</strong>/month</h3>
                    <p>{property.type}</p>
                  </div>
                  <div>{property.name}</div>
                  <p>{property.address}</p>
                </div>
              </div>
          )
        })
      ) : (
      <div className='nodata'>
        No data found 
      </div>)}
      </div>
    </div>
  );
}

export default App;
