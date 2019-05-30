import React from 'react';

const filter = (props) => {

return (
      <div>
        <h1>
          <input type="text" placeholder='Search' value={props.filtered} onChange={props.handleFilterChange} />
          </h1>
      </div>
    )
}


export default filter;
