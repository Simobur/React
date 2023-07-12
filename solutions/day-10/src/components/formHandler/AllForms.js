import React from "react";
import Button from "../../shared/Button";

const options = [
  { value: "", label: "--Select Country--" },
  {
    value: "Poland",
    label: "Poland",
  },
  { value: "Sweden", label: "Sweden" },
  { value: "Norway", label: "Norway" },
  { value: "Germany", label: "Germany" },
];

const selectOptions = options.map(({ value, label }) => (
  <option value={value}>{label}</option>
));

class AllForms extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    tel: "",
    dateOfBirth: "",
    favoriteColor: "",
    weight: "",
    gender: "",
    file: "",
    bio: "",
    skills: {
      html: false,
      css: false,
      javascript: false,
    },
  };

  handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      this.setState({ skills: { ...this.state.skills, [name]: checked } });
    } else if (type === "file") {
      console.log(type, "check here");
      this.setState({ [name]: e.target.files[0] });
    } else {
      this.setState({ [name]: value });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const {
      firstName,
      lastName,
      email,
      tel,
      dateOfBirth,
      favoriteColor,
      weight,
      country,
      gender,
      bio,
      file,
      skills,
    } = this.state;

    const formatedSkills = [];
    for (const key in skills) {
      console.log(key);
      if (skills[key]) {
        formatedSkills.push(key.toUpperCase());
      }
    }

    const data = {
      firstName,
      lastName,
      email,
      tel,
      dateOfBirth,
      favoriteColor,
      weight,
      country,
      gender,
      bio,
      file,
      skills: formatedSkills,
    };
    console.log(data);
  };
  render() {
    const {
      firstName,
      lastName,
      email,
      tel,
      dateOfBirth,
      favoriteColor,
      weight,
      country,
      gender,
      bio,
    } = this.state;

    return (
      <div>
        <h2>Add Student</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>{" "}
              <input
                type="text"
                name="firstName"
                value={firstName}
                placeholder="First Name"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>{" "}
              <input
                type="text"
                name="lastName"
                value={lastName}
                placeholder="Last Name"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">eMail</label>{" "}
              <input
                type="email"
                name="email"
                value={email}
                placeholder="Email"
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="tel">Telephone</label>{" "}
            <input
              type="tel"
              name="tel"
              value={tel}
              placeholder="Telephone"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="dateOfBirth">Date of birth </label>
            <input
              type="date"
              name="dateOfBirth"
              value={dateOfBirth}
              onChange={this.handleChange}
              placeholder="Date of Birth"
            />
          </div>
          <div className="form-group">
            <label htmlFor="favoriteColor">Favorite Color</label>
            <input
              type="color"
              id="color"
              name="color"
              value={favoriteColor}
              onChange={this.handleChange}
              placeholder="Favorite Color"
            />
          </div>
          <div className="form-group">
            <label htmlFor="weight">Weight </label>
            <input
              type="number"
              id="weight"
              name="weight"
              value={weight}
              onChange={this.handleChange}
              placeholder="Weight in Kg"
            />
          </div>
          <div>
            <Button text="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default AllForms;
