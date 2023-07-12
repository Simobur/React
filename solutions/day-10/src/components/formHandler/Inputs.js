import React from "react";
import Button from "../../shared/Button";

class Inputs extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    country: "",
    title: "",
  };

  handleChange = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    const { firstName, lastName, title, country } = this.state;

    return (
      <div className="inputs">
        <h3>Inputs</h3>
        <h2>Student: </h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={firstName}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={title}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={lastName}
              onChange={this.handleChange}
            />
          </div>
          <Button text="Submit" />
        </form>
      </div>
    );
  }
}

export default Inputs;
