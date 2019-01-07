import React from 'react';
import PropTypes from 'prop-types';
import Continents from "./data/continents.json";






  
    const selectedRegion = (props.continent) => {
      return 
        let continentFiltered = Continents.filter((region) => {
          return region.continent === {selectedRegion}
        });
        
        //console.log("the values are = ",  ages1)
        
        const countryList = continentFiltered.map((info, i) => {
              return (
               //  console.log(info.continent),
                 info.countries.map((country, idx) =>
                   console.log(country.name, country.flag)
                )
            )});
      
    };
    
    
    return (
      <div className="App">
       
          <div className="step2Container"> 
            <h2> Step 2</h2>
              <h3> Select a country.</h3>
              <countryList/>
              
          </div>
      </div>
    );
 





export default Step2;