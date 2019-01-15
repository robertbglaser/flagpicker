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
    // var flagArr= flagArr || []

    console.log("in handleCheckItem the value is  ", e.target.value )
     
     const  countrySelected = e.target.value;
    /*  this.setState({countrySelected: countrySelected});
    if (e.target.checked){
        this.setState({isChecked: !this.state.isChecked});
    }
    */
      let continent = this.state.selectedRegion;

      Continents.forEach(function(foo, index){
        if (foo.continent === continent){
          
       //   console.log("the continents match " , foo.continent)
       //   console.log(foo.name)

          foo.countries.forEach( function(bar,index){
         //   console.log("in the for each ", bar.name)
            if (bar.name === countrySelected ){
              console.log(bar.name, bar.flag)
            }})
          
        }  //end of the if stmt
      })  //end of the forEach

    //  console.log(flagArr)
    // this.setState({arrOfFlags: flagArr}); 

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

  /*  const countryFlag = this.state.listOCountries.map(((flag) => {
      if(flag.name === this.state.countrySelected){
        var selectedFlag = flag.flag;
      }
      return ( 
             <li className="step3List"> {selectedFlag}
             </li>
      )    
    }));
*/
  
    return (
      <div>

        <ul>
        {countries}

        </ul>

        <div> 
         
        </div>
      </div>
      
    )
  }
}