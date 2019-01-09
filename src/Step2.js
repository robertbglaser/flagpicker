import React, { Component } from 'react';
import Continents from "./data/continents.json";

export default class Step2 extends Component {
  constructor(props){
    super(props)
    this.state ={
      selectedRegion:"Asia",
      continentList: [],

    }



  };

  componentDidMount() {
    const regionArr =[];
    Continents.map((foo) => {
       return ( 
         regionArr.push(foo.continent)
       )
       
    })
    this.setState({continentList:regionArr});

   // console.log(regionArr)
  }
  
  render() {

    //const selectedRegion = (this.props.continent); 
    //const  = this.state.region;
    console.log("before the loop"); 

      for (var x in this.state.continentList){
        console.log("in the loop" + this.state.continentList[x])
         if (this.state.continentList[x] === this.state.selectedRegion){
              console.log("match")
         } 
      }
  
      /*  let continentFiltered = Continents.filter((Asia) => {
          return region.continent === 'Asia'
        });
        
        console.log("In Step 2, the values are = ",  continentFiltered)
        
        const countryList = continentFiltered.map((info, i) => {
              return (
                console.log(info.continent),
                 info.countries.map((country, idx) =>
                 console.log("in the countries map " + country.name)
                 
                )
            )});  */
      
    return (
      <div>

       
        
      </div>
    )
  }
}