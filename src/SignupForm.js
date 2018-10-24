import React, { Component } from 'react';

class SignupForm extends Component {
  state = {
    form: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  };

  handleChange = (event) => {
    event.persist();
    this.setState((state, props) => {
      return {
        form: {
          ...state.form,
          [event.target.name]: event.target.value,
        },
      };
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('this.state: ', this.state);
  };

  render() {
    return (
      <form className="signupForm" onSubmit={this.handleSubmit}>
        <h4>Sign Up with CareDash to Edit your Provider Profile</h4>
        <div className="formFieldContainer">
          <div>
            <label>First Name:</label>
          </div>
          <div>
            <input
              onChange={this.handleChange}
              type="text"
              name="firstName"
              value={this.state.form.firstName}
            />
          </div>
        </div>

        <div className="formFieldContainer">
          <div>
            <label>Last Name:</label>
          </div>
          <div>
            <input
              onChange={this.handleChange}
              type="text"
              name="lastName"
              value={this.state.value}
            />
          </div>
        </div>

        <div className="formFieldContainer">
          <div>
            <label>Email Address:</label>
          </div>
          <div>
            <input
              onChange={this.handleChange}
              type="email"
              name="email"
              value={this.state.value}
            />
          </div>
        </div>

        <div className="formFieldContainer">
          <div>
            <label>Password:</label>
          </div>
          <div>
            <input
              onChange={this.handleChange}
              type="password"
              name="password"
              value={this.state.value}
            />
          </div>
        </div>
        <div className="formFieldContainer">
          <div>
            <label>Confirm Password:</label>
          </div>
          <div>
            <input
              onChange={this.handleChange}
              type="password"
              name="confirmPassword"
              value={this.state.value}
            />
          </div>
        </div>

        <div className="buttonGroup">
          <button onClick={this.handleSubmit}>Sign Up</button>
          <button onClick={this.handleSubmit}>Log In</button>
        </div>
      </form>
    );
  }
}

export default SignupForm;
