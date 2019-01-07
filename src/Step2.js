import React, { Component } from 'react';
import Continents from "./data/continents.json";

export default class Step2 extends Component {
  render() {

    const selectedRegion = (this.props.continent);  

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
      
    return (
      <div>
        
      </div>
    )
  }
}