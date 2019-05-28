import React from 'react';

const filter = (props) => {

return (
      <div>
        <input type="text" placeholder='Search' value={props.filtered} onChange={props.handleFilterChange} />
      </div>
    )
}


export default filter;
