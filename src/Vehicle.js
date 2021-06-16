import React from 'react'
import './Vehicle.css'

const Vehicle = ({ name, cost, length }) => {
  return (
    <div className='vehicle-container'>

      <div className='vehicle-row'>
        <div>
          <div className='vehicle-data'>
            <p className='vehicle-name'>{name}</p>
            <p className='vehicle-cost'>${cost.toLocaleString()}</p>
            <p className='vehicle-length'>{length}</p>

          </div>
        </div>
      </div>

    </div>
  );
};

export default Vehicle