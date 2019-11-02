import React from 'react'


const Confirmation = (props) => {

  let total = 0

    return (
      <div>
        <h3>
          Your Total is:
          {props.clickedSneakers.map((sneaker) =>{
            total += sneaker.price
          })}
        </h3>
          <h1>${total}</h1>
          <button>Pay Now</button>
      </div>
    );
  }


  export default Confirmation ;
