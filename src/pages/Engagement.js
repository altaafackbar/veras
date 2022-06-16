import React, { Component } from 'react';
import FormPersonalInfo from './FormPages/FormPersonalInfo';
import info from './testInfo.json'




export class Engagement extends Component {
  state = {
    step: 1,
    isrn: '',
    dob: '',
    election: info.electionTitle,
    candidates: info.candidates
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const { step } = this.state;
    const { isrn, dob, election, candidates } = this.state;
    const values = { isrn, dob, election, candidates};

    switch (step) {
      case 1:
        return (
          <FormPersonalInfo
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
        default:
            (console.log('This is a multi-step form built with React.'))
    }
  }
}

export default Engagement;