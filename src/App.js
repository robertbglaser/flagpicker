import React, { Component } from 'react';
import './App.css';
import Continents from "./data/continents.json";
import Step2 from './Step2';


class App extends Component {
  constructor (props){
    super(props);
    this.state={
      continentList: [],
      selectedContinent: "",
      step1SelectText:"",
      continentSearchResult:"",
      showList:false,
      step2Show: false,
    }


  };

  componentDidMount() {
    var arrlist =[];
    Continents.map((foo) => {
       return ( 
         arrlist.push(foo.continent)
       )
       
    })
    this.setState({continentList:arrlist})
  }

  handleChange =(event) =>{
    console.log("handleChange fired")
    let searchString = event.target.value;
    console.log("the value that was inputed is :" , searchString);

    //this.setState({selectedContinent: event.target.value})
    this.setState({step1SelectText:"You selected"});
    this.setState({continentSearchResult: event.target.value});
    this.setState({step2Show: true})
  }
  handleInput =(event) =>{

    console.log("in handleInput")
    let searchString = event.target.value;
    console.log("the value that was inputed is :" , searchString);

   // this.setState({continentSearchResult: event.target.value});
  }

  handleClick =(event) =>{

    console.log("in handleClick")
    this.setState({showList:true});
  }


  handleClickList =(event) =>{
    event.preventDefault();

    console.log("A click in the list has been heard " + event.target.value );
     
    this.setState({selectedContinent: event.target.value});
    this.setState({step1SelectText:"You selected"});
    this.setState({continentSearchResult: event.target.value});
    this.setState({step2Show: true})
 

  }
    


  render() {

   let nextStepH2 ="",
       nextStepH3 = "",
       nextStep ="";

    if (this.state.step2Show){
      nextStepH2 = (<h2> Step 2</h2>);
      nextStepH3 =(<h3> Now, select a country.</h3>);
      nextStep = (<Step2 selectedContinent={this.state.selectedContinent}/>);
    }
    else {
      nextStep = "";
    }

    if (this.state.showList) 
    var inputlist =this.state.continentList.map((area) => {
      return (<div key={area}>
                <input  value={area} name="{area}" onClick={this.handleClickList} onChange={this.handleInput}/> 
                <br/>
              </div>
              )
    })
    return (
      <div className="App">
        <div className="titleContainer"> 
          <h1 className="title">Flag Picker</h1>
          <p> This app will help you learn flags around the world in <u>3 steps</u>.</p>
        </div>
        <div className="container"> 
            <div className="step1Container"> 
                <h2> Step 1</h2>
                <h3> Select a continent.</h3>
                <input 
                      type="text" 
                      name={this.state.continentSearchResult} 
                      value={this.state.continentSearchResult} 
                      className={""} 
                      onChange={this.handleChange}
                      onMouseDown={this.handleClick}
                      />
                      <br/>
                  
                    {inputlist}
                 
                  <br/><br/>
                <label>{this.state.step1SelectText}</label><br/><br/>
                <label><strong>{this.state.selectedContinent}</strong></label><br/><br/>
              </div>
              <div className="step2Container"> 
              
                  {nextStepH2}
                  {nextStepH3}
                  {nextStep}
                    
              </div>

              </div>
      </div>
    );
  }
}

export default App;