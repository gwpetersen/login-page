import React, { Component } from "react";
import { Link } from "react-router-dom";

class SignUpForm extends Component {
  render() {
    return (
      <div className="FormCenter">
        <form className="FormFields" onSubmit={this.handleSubmit}>
          <div className="FormField">
            <label className="FormField__Label" htmlFor="name">
              Name
            </label>
            <input
              type="name"
              id="name"
              className="FormField__Input"
              placeholder="Enter a name"
              name="name"
            />
          </div>

          <div className="FormField">
            <label className="FormField__Label" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="FormField__Input"
              placeholder="Enter an email"
              name="email"
            />
          </div>

          <div className="FormField">
            <label className="FormField__Label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="FormField__Input"
              placeholder="Enter a password"
              name="password"
            />
          </div>

          <div className="FormField">
            <label className="FormField__CheckboxLabel">
              <input
                className="FormField__Checkbox"
                type="checkbox"
                name="hasAgreed"
              />
              I agree all statements in
              <a href=" " className="FormField__TermsLink">
                terms of service
              </a>
            </label>
          </div>

          <div className="FormField">
            <button className="FormField__Button mr-20">Sign Up</button>{" "}
            <Link
              to="/sign-in"
              className="FormField__Link"
              activeclassname="FormField__Link--Active"
            >
              I'm already a member
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUpForm;
