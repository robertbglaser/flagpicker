import React, { Component } from 'react';
import Continents from "./data/continents.json";

export default class Step2 extends Component {
  constructor(props){
    super(props)
    this.state ={
      selectedRegion:"Asia",
      continentList: [],
      listOCountries:[]

    }



  };

  componentDidMount() {
    const regionArr =[];
    const selectedRegion = (this.state.selectedRegion); 
    var countryArr = [];
    Continents.map((foo) => {
       return ( 
         regionArr.push(foo.continent)
       )
       
    })
    this.setState({continentList:regionArr});

    Continents.forEach(function(region,index){
      if ( selectedRegion === region.continent){
           countryArr= region.countries
      }
       
   });

   //console.log(countryArr)

   this.setState({listOCountries: countryArr});
  }
  
  render() {

    console.log("in step 2 render" , this.state.listOCountries)    
    return (
      <div>

        <ul>


        </ul>

       
        
      </div>
    )
  }
}