import React, { Component } from 'react'

export default class Step3 extends Component {
  render() {
      console.log("inside step 3 ", this.props.label )
    return (
      <div>
          <div className="step3-container"> 
            <h2>Step 3</h2><br/>

         <button onClick={this.handleClearFlags}>Clear Flags</button>
         </div>
      </div>
    )
  }
}
