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

    this.setState({selectedContinent: event.target.value});
    this.setState({step1SelectText:"You selected"});
    this.setState({continentSearchResult: event.target.value});
  }
  handleInput =(event) =>{

    console.log("inside handleInput " + event.target.value );
    this.setState({continentSearchResult: event.target.value});
  }

  handleClick =(event) =>{

    console.log("A click event has been heard " );
    this.setState({showList:true});
  }


  handleClickList =(event) =>{

    console.log("A click in the list has been heard " + event.target.value );
     
    this.setState({selectedContinent: event.target.value});
    this.setState({step1SelectText:"You selected"});
    this.setState({continentSearchResult: event.target.value});
 

  }
    


  render() {
    if (this.state.showList) 
    var inputlist =this.state.continentList.map((area) => {
      return (<div key={area}>
                <input  value={area} onClick={this.handleClickList} onChange={this.handleInput}/> 
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
            <h2> Step 2</h2>
              <h3> Now, select a country.</h3>
                <Step2 selectedContinent={this.state.selectedContinent}/>
          </div>
      </div>
    );
  }
}

export default App;