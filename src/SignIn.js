import React, { Component } from "react";
import { auth, googleAuthProvider } from "./firebase";

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }

  render() {
    return (
      <div className="SignIn">
        <input
          type="text"
          value={this.state.email}
          onChange={event => {
            this.setState({ email: event.target.value });
          }}
        />
        <input
          type="text"
          value={this.state.password}
          onChange={event => {
            this.setState({ password: event.target.value });
          }}
        />
        <button
          onClick={() =>
            auth
              .signInWithEmailAndPassword(this.state.email, this.state.password)
              .catch(err => console.log(err))
          }
        >
          Sign In
        </button>
      </div>
    );
  }
}

export default SignIn;
