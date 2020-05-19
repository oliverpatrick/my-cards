import React from 'react';
import {Link} from 'react-router-dom';
import '../scss/SignUp.scss'

function Copyright() {
  return (
    <div>
      {'Copyright © '}
      <Link to="/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </div>
  );
}



export default function SignUp() {
  return (
    <div className="signup">
      <div className="signup__background">
        <h1>
          Sign up
        </h1>
        <form className="signup__form" noValidate>
            <input
            autoComplete="fname"
            name="firstName"
            required
            fullWidth
            id="firstName"
            label="First Name"
            autoFocus
            />

            <input
            required
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            autoComplete="lname"
            />

            <input
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            />

            <input
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            />

            <input type="checkbox" value="allowExtraEmails" name="emails" />
            <label for="emails">I want to receive inspiration, marketing promotions and updates via email.</label>

          <button
            type="submit"
            className="button"
          >
            Sign Up
          </button>

              <Link to="/signin" variant="body2">
                Already have an account? Sign in
              </Link>

                </form>
            </div>
        <Copyright />
    </div>
  );
}