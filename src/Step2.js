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
      isChecked: false,

    }
  };

  componentDidMount() {
 //   const regionArr =[];
    const selectedRegion = this.state.selectedRegion; 
    var countryArr = [];
    

    Continents.forEach(function(region,index){
      if ( selectedRegion === region.continent){
           countryArr= region.countries
      }  
   });
    this.setState({listOCountries: countryArr});

  //  console.log(this.state.listOCountries)
  }
  handleCheckItem = (e)=>{
   

      var flagArr = [];
      var prevFlagArr= [];
      prevFlagArr = this.state.arrOfFlags;

      console.log("the value of prevFlagArr = ", prevFlagArr);
      console.log("the value of arrOfFlags, state = ", this.state.arrOfFlags);

    console.log("in handleCheckItem the value is  ", e.target.value )
     
     const  countrySelected = e.target.value;
      let continent = this.state.selectedRegion;

      Continents.forEach(function(foo, index){
        if (foo.continent === continent){
          foo.countries.forEach( function(bar,index){
            if (bar.name === countrySelected ){
              flagArr.push(bar.flag);
            }})
            
              for( var x in prevFlagArr){
                console.log("in the last loop")
                flagArr.push(prevFlagArr[x]);
              }
        }  //end of the if stmt
      })  //end of the forEach
      this.setState({arrOfFlags: flagArr}); 

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
    let countryFlag = this.state.arrOfFlags.map(((foo,index) => {
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
         
        </div>
      </div>
      
    )
  }
}