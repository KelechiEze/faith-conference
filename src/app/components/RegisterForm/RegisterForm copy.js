"use client";
import React, { Component } from "react";
import "./RegisterForm.css";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      submitted: false,
      errors: {},
    };
  }

  validateForm = (fields) => {
    const errors = {};
    const {
      firstName,
      lastName,
      email,
      phoneNo,
      gender,
      modeOfParticipation,
      summitDiscoveryMethod,
    } = fields;

    if (!firstName.trim()) errors.firstName = "First name is required";
    if (!lastName.trim()) errors.lastName = "Last name is required";
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.email = "Invalid email address";
    }
    if (!phoneNo.trim()) {
      errors.phoneNo = "Phone number is required";
    } else if (!/^(?:\+)?\d+$/.test(phoneNo)) {
      errors.phoneNo =
        "Invalid phone number. Only numbers and an optional leading + are allowed";
    }
    if (!gender.trim()) errors.gender = "Gender is required";
    if (!modeOfParticipation.trim())
      errors.modeOfParticipation = "Mode of participation is required";
    if (!summitDiscoveryMethod.trim())
      errors.summitDiscoveryMethod = "This field is required";

    return errors;
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ loading: true, errors: {} });

    const formData = new FormData(event.target);
    const firstName = formData.get("firstName")?.toString().trim() || "";
    const lastName = formData.get("lastName")?.toString().trim() || "";
    const email = formData.get("email")?.toString().trim() || "";
    const phoneNo = formData.get("phoneNo")?.toString().trim() || "";
    const gender = formData.get("gender")?.toString().trim() || "";
    const modeOfParticipation =
      formData.get("modeOfParticipation")?.toString().trim() || "";
    const summitDiscoveryMethod =
      formData.get("summitDiscoveryMethod")?.toString().trim() || "";

    const errors = this.validateForm({
      firstName,
      lastName,
      email,
      phoneNo,
      gender,
      modeOfParticipation,
      summitDiscoveryMethod,
    });

    if (Object.keys(errors).length > 0) {
      this.setState({ errors, loading: false });
      return;
    }

    // Send email
    fetch("/api/sendemail", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        phoneNo,
        gender,
        modeOfParticipation,
        summitDiscoveryMethod,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log("Email sent:", data))
      .catch((error) => console.error("Email error:", error));

    // Google Apps Script
    fetch(
      "https://script.google.com/macros/s/AKfycbwfhKRW7LnF9U0YA5LYLShGuqaWabHywaGTzOaVlqUc8R6xpehkCxK2ISMe46X9Tdxlew/exec",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("Sheet response:", data);
        this.setState({ submitted: true });
      })
      .catch((error) => {
        console.error("Google Script error:", error);
        alert("Error submitting the form. Please try again.");
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  };

  render() {
    const { errors, loading, submitted } = this.state;

    if (submitted) {
      return (
        <div className="register-success">
          <h2>Registration Successful</h2>
          <p>
            Thank you for registering. Your registration has been submitted
            successfully!
          </p>
        </div>
      );
    }

    return (
      <div id="register" className="register-wrapper">
        <form className="register-form" onSubmit={this.handleSubmit}>
          <h2>Register</h2>
          <div className="form-group">
            <input
              name="firstName"
              placeholder="First Name *"
              className={errors.firstName ? "error" : ""}
            />
            {errors.firstName && (
              <small className="error-msg">{errors.firstName}</small>
            )}
          </div>

          <div className="form-group">
            <input
              name="lastName"
              placeholder="Last Name *"
              className={errors.lastName ? "error" : ""}
            />
            {errors.lastName && (
              <small className="error-msg">{errors.lastName}</small>
            )}
          </div>

          <div className="form-group">
            <input
              name="email"
              placeholder="Email *"
              type="email"
              className={errors.email ? "error" : ""}
            />
            {errors.email && (
              <small className="error-msg">{errors.email}</small>
            )}
          </div>

          <div className="form-group">
            <input
              name="phoneNo"
              placeholder="Phone Number *"
              className={errors.phoneNo ? "error" : ""}
            />
            {errors.phoneNo && (
              <small className="error-msg">{errors.phoneNo}</small>
            )}
          </div>

          <div className="form-group">
            <select name="gender" className={errors.gender ? "error" : ""}>
              <option value="">Select Gender *</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            {errors.gender && (
              <small className="error-msg">{errors.gender}</small>
            )}
          </div>

          <div className="form-group">
            <select
              name="modeOfParticipation"
              className={errors.modeOfParticipation ? "error" : ""}
            >
              <option value="">Mode of Participation *</option>
              <option value="physical">Physical</option>
              <option value="virtual">Virtual</option>
            </select>
            {errors.modeOfParticipation && (
              <small className="error-msg">
                {errors.modeOfParticipation}
              </small>
            )}
          </div>

          <div className="form-group">
            <select
              name="summitDiscoveryMethod"
              className={errors.summitDiscoveryMethod ? "error" : ""}
            >
              <option value="">How did you hear about us *</option>
              <option value="website">Website</option>
              <option value="social_media">Social Media</option>
              <option value="Church">Church</option>
              <option value="Email">Email</option>
              <option value="Global_Harvest_Island_Member">
                Global Harvest Island Member
              </option>
              <option value="word_of_mouth">Word of Mouth</option>
              <option value="Road_Show">Road Show</option>
              <option value="Lagos_Student">Lagos Student</option>
              <option value="other">Other</option>
            </select>
            {errors.summitDiscoveryMethod && (
              <small className="error-msg">
                {errors.summitDiscoveryMethod}
              </small>
            )}
          </div>

          <button type="submit" disabled={loading} className="register-submit-btn">
          {loading ? "Submitting..." : "Submit"}
        </button>

        </form>
      </div>
    );
  }
}
