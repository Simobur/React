import React from "react";

class Forms extends React.Component {
  state = {
    firstName: "",
  };

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({ firstName: value });
  };

  render() {
    const firstName = this.state.firstName;

    return (
      <div className="Form">
        <h2>Forms</h2>
        <label htmlFor="firstName">First name: </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="First Name"
          value={firstName}
          onChange={this.handleChange}
        />
        <h3>{this.state.firstName}</h3>
      </div>
    );
  }
}

export default Forms;
