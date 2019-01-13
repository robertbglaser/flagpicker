import React, { Component } from 'react';
import Continents from "./data/continents.json";

export default class Step2 extends Component {
  constructor(props){
    super(props)
    this.state ={
      selectedRegion:"Asia",
      continentList: [],
      listOCountries:[],
      countrySelected: "",

    }
  };

  componentDidMount() {
 //   const regionArr =[];
    const selectedRegion = (this.state.selectedRegion); 
    var countryArr = [];
    

    Continents.forEach(function(region,index){
      if ( selectedRegion === region.continent){
           countryArr= region.countries
      }  
   });
    this.setState({listOCountries: countryArr});
  }
  handleCheckItem = (e)=>{

     const  countrySelected = e.target.value;
      this.setState({countrySelected: countrySelected});
  }
  render() {

    console.log("in step 2 render, state = " , this.state.countrySelected)

  
    
    const countries = this.state.listOCountries.map(((foo) => {
      return ( 
        <div key={foo.name} >
          
            <li className="step2List"> 
            <input type="checkbox" onChange={this.handleCheckItem} value={foo.name}/>{foo.name}
            </li>
            
        </div>
      )    
    }));

    const countryFlag = this.state.listOCountries.map(((flag) => {
      if(flag.name === this.state.countrySelected){
        var selectedFlag = flag.flag;
      }
      return ( 
             <li className="step3List"> {selectedFlag}
             </li>
      )    
    }));

  
    return (
      <div>

        <ul>
        {countries}

        </ul>

        <div> 
          <ul>
            {countryFlag}
          </ul>
        </div>
      </div>
      
    )
  }
}