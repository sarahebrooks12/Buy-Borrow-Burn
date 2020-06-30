import React, { Component } from "react";
import RegisterManager from "../../modules/RegisterManager";
import { Form, Button } from "semantic-ui-react";

//1) register = create
//2) check database if the user or email exists compare that to state and if that's in state then you can compare the login then if that works then you can perform login credentials

class Register extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    users: [],
    loadingStatus: false,
  };

  handleFieldChange = (evt) => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  constructNewUser = (evt) => {
    evt.preventDefault();
    if (this.state.name === "" || this.state.email === "") {
      window.alert("Please fill out input fields");
    } else {
      this.setState({ loadingStatus: true });
      const newUser = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
      };

      RegisterManager.postUser(newUser).then(() =>
        this.props.history.push("/")
      );
    }
  };

  componentDidMount() {
    RegisterManager.getAllUsers().then((users) => {
      this.setState({
        users: users,
        loadingStatus: true,
      });
    });
  }

  render() {
    return (
      <>
        <Form>
          <Form.Field>
            <label>Name</label>
            <input
              id="name"
              required
              onChange={this.handleFieldChange}
              placeholder="Name"
            />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input
              required
              onChange={this.handleFieldChange}
              id="email"
              type="email"
              placeholder="Email"
            />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input
              required
              onChange={this.handleFieldChange}
              type="password"
              id="password"
              placeholder="Password"
            />
          </Form.Field>
          <Button
            // disabled={this.state.loadingStatus}
            onClick={this.constructNewUser}
            type="submit"
          >
            Register
          </Button>
          <Button
            // disabled={this.state.loadingStatus}
            onClick={() => {
              this.props.history.push("/");
            }}
            type="submit"
          >
            Return to Login
          </Button>
        </Form>
      </>
    );
  }
}
export default Register;
