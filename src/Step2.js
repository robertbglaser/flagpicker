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
    Continents.map((foo) => {
       return ( 
         regionArr.push(foo.continent)
       )
       
    })
    this.setState({continentList:regionArr});
  }
  
  render() {

    const selectedRegion = (this.state.selectedRegion); 
    //const  = this.state.region;
   // console.log("before the loop"); 


      var countryArr = [];
      Continents.forEach(function(region,index){
        if ( selectedRegion === region.continent){
             countryArr= region.countries
        }
         
     });

     this.setState({listOCountries: countryArr});

     console.log("after the forEach " , this.state.listOCountries);
      
              
      
    return (
      <div>

        <ul>


        </ul>

       
        
      </div>
    )
  }
}