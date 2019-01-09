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
         if (this.state.continentList[x] === this.state.selectedRegion){
              var match = this.state.continentList[x]
         } 
      }
  
      /*  l
        
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