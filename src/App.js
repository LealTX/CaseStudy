import React, { useState, useEffect } from "react";
import axios from 'axios';
import Vehicle from "./Vehicle";
import './App.css'


function App() {
  const [vehicles, setVehicles] = useState([]);
  const [search, setSearch] = useState('');
  const [pages, setPages] = useState([]);

  useEffect(() => {
    axios.get('https://swapi.dev/api/vehicles/')
      .then(res => {
        setVehicles(res.data.results);
        setPages(res.data);
        console.log(res.data);
      })
  }, []);

  const handleChange = e => {
    setSearch(e.target.value);
  };

  const filteredVehicles = vehicles.filter(vehicle =>
    vehicle.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );



  return (
    <div className='vehicle-app'>
      <div className='vehicle-search'>
        <h2 className='vehicle-text'>Vehicles</h2>
        <div className='search-box'>
          <form>
            <input className='vehicle-input' type="text" placeholder="Search" onChange={handleChange} />
          </form>
        </div>
        <div className='header-row'>
          <p className='header-name'>Name</p>
          <p className='header-cost'>Cost</p>
          <p className='header-length'>Length</p>
        </div>
      </div>
      {
        filteredVehicles.map(vehicle => {
          return (
            <Vehicle
              name={vehicle.name}
              cost={vehicle.cost_in_credits}
              length={vehicle.length}
            />
          );
        })
      }

    </div >
  );
}

export default App;