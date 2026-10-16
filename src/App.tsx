import { useState } from 'react';

import { CarBrands } from './data.js';

export default function Cars() {
  const [index, setIndex] = useState(0);

  function handleClick() {
    setIndex((index) => (index + 1 ) % CarBrands.length);
  }

  const cars = CarBrands [index];

  return (
    
    <div>
      <button onClick={handleClick}>
        Next page
      </button>

      <p>
      ({index + 1} of {CarBrands.length})
      </p>


      <h1 className = "P"> This is a mini page highlighting car brands, their founders, 
        founding date and their best selling vehicle </h1>

    
    
    <div className = "FP" >

        <h2>
          
          {cars.name}. Founded by {cars.founder} in {cars.year}
        </h2>

    

          Best selling Vehicle: The {cars.bestsellingvehicle}

          
          <img 
          src={cars.image}
          width = "250"
          height= "250"
          
          />

     </div>   

     <div className = "SP">

        <p>

          Car logo:

          <img 
          src={cars.logo}
          width = "250"
          height= "250"
          />

        </p>

      </div>

    </div>  
  );
}      
