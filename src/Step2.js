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
      arrOfFlags:[],
      clearFlagArry:[],

    }
  };

  componentDidMount() {
    const selectedRegion = this.state.selectedRegion; 
    var countryArr = [];
    

    Continents.forEach(function(region,index){
      if ( selectedRegion === region.continent){
           countryArr= region.countries
      }  
   });
    this.setState({listOCountries: countryArr});

  }
  handleCheckItem = (e)=>{
   

      var flagArr = [];
      var prevFlagArr= [];
      prevFlagArr = this.state.arrOfFlags;

     const  countrySelected = e.target.value;
      let continent = this.state.selectedRegion;

      Continents.forEach(function(foo, index){
        if (foo.continent === continent){
          foo.countries.forEach( function(bar,index){
            if (bar.name === countrySelected ){
              flagArr.push(bar.flag);
            }})
            
              for( var x in prevFlagArr){
                flagArr.push(prevFlagArr[x]);
              }
        } 
      })  
      this.setState({arrOfFlags: flagArr}); 

  }


  handleClearFlags =() => {
    this.setState({arrOfFlags: this.state.clearFlagArry}); 
  }


  render() {

  
    
    const countries = this.state.listOCountries.map(((foo) => {
      return ( 
        <div key={foo.name} >
          
            <li className="step2List"> 
            <input type="checkbox" onChange={this.handleCheckItem} value={foo.name}/>{foo.name}
            </li>
            
        </div>
      )    
    }));
     let flagString = "";
     this.state.arrOfFlags.map(((foo,index) => {
         flagString = flagString + " " + this.state.arrOfFlags[index];

      return ( 
             <div key={index} className="step3List"> 
             <label>{flagString}</label>
              
             </div>
      )    
    }));
  
    return (
      <div>

        <ul>
        {countries}

        </ul>

        <div> 
          <label>Step 3</label><br/>
          {flagString}
          <br/>
          <br/>
          <br/>
        </div>

        <button onClick={this.handleClearFlags}>Clear Flags</button>
      </div>
      
    )
  }
}