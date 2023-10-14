import React, { Component } from "react";
import "./AgeCalc.css";

class AgeCalc extends Component {
  constructor() {
    super();
    this.state = {
      content: "",
      birthDate: "",
    };
  }

  calcAge = () => {
    const inputDate = new Date(this.state.birthDate);
    const currentDate = new Date();
    const ageInMilliseconds = currentDate - inputDate;
    const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);

    this.setState({
      content: `You are ${Math.floor(ageInYears)} years old`,
    });
  };

  handleDateChange = (event) => {
    this.setState({ birthDate: event.target.value });
  };

  render() {
    return (
      <div className="content">
        <h1>Age Calculator</h1>
        <label>
          <b>Enter your date of birth</b>
        </label>
        <br />
        <input
          type="date"
          value={this.state.birthDate}
          onChange={this.handleDateChange}
        />
        <br />
        <button onClick={this.calcAge}>Calculate Age</button>
        <br />
        <h3>{this.state.content}</h3>
      </div>
    );
  }
}

export default AgeCalc;
