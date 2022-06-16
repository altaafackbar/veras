import React, { Component } from 'react'
import './FormPages.css'

export class FormPersonalInfo extends Component {

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {

    const { values, handleChange } = this.props;
    return (
      <div style={{flexDirection: 'flex-column', justifyContent: 'center', alignItems: 'center'}}>
      <section class="electionHeader">
          <h1>Vote in the {values.election} Election</h1>
      </section>
      <section class="infoHeader">
          <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
              <div className="rectangle"/>
              <p className='type'>Type in Your Information to Vote</p>
              
          </div>
          
      </section>
      
  </div>
    )
  }
}

export default FormPersonalInfo