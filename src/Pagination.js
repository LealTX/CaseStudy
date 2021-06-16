import React from 'react'

const Pagination = ({ next }) => {

    return (
        <div className='page-container'>
            <div className='page-row'>
                <button onClick='nextPage'>Next{next}</button>
            </div>
        </div>
    )

};

export default Pagination