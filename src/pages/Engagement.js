import React, { Component } from 'react';
import Candidates from './FormPages/Candidates';
import FormPersonalInfo from './FormPages/FormPersonalInfo';
import ConfirmCandidates from './FormPages/ConfirmCandidates';
import Submitted from './FormPages/Submitted';
import info from './testInfo.json'




export class Engagement extends Component {
  state = {
    step: 1,
    isrn: '',
    dob: '',
    election: info.electionTitle,
    candidates: info.candidates,
    chosenCandidates: []
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

  handleListChange = (newValue) => {
    this.setState({ value: newValue });
  }

  render() {
    const { step } = this.state;
    const { isrn, dob, election, candidates, chosenCandidates } = this.state;
    const values = { isrn, dob, election, candidates, chosenCandidates};

    switch (step) {
      case 1:
        return (
          <FormPersonalInfo
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
        case 2:
          console.log(this.state)
          return (
            <Candidates
              nextStep={this.nextStep}
              handleChange={this.handleListChange}
              values={values}
            />
          );
          case 3:
            console.log(this.state.value)
            return (
              <ConfirmCandidates
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={this.state.value}
              />
            );
            case 4:
              return (
                <Submitted
                  nextStep={this.nextStep}
                  prevStep={this.prevStep}
                  handleChange={this.handleChange}
                  values={this.state.value}
                />
              );
        default:
            (console.log('This is a multi-step form built with React.'))
    }
  }
}

export default Engagement;