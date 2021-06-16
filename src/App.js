import React, { useState, useEffect } from "react";
import axios from 'axios';
import Vehicle from "./Vehicle";


function App() {
  const [vehicles, setVehicles] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get('https://swapi.dev/api/vehicles/')
      .then(res => {
        setVehicles(res.data.results);
        console.log(res.data.results);
      })
  }, []);

const handleChange = e => {
  setSearch(e.target.value);
};

const filteredVehicles = vehicles.filter(vehicle =>
    Vehicle.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
  );



  return (
    <div className='vehicle-app'>
      <div className='vehicle-search'>
        <h2 className='vehicle-text'>Vehicless</h2>
        <form>
          <input className='vehicle-input' type="text" placeholder="Search" onChange={handleChange} />
        </form>
      </div>
      {filteredVehicles.map(vehicle => {
        return (
          <Vehicle
            name={vehicle.name}
            cost={vehicle.cost_in_credits}
            length={vehicle.length}
          />
        );
      })}

    </div>
  );
}

export default App;