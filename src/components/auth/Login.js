import React, { Component } from "react";
import RegisterManager from "../../modules/RegisterManager";
import { Grid, Form, Divider, Button, Segment } from "semantic-ui-react";

//1) register = create
//2) check database if the user or email exists compare that to state and if that's in state then you can compare the login then if that works then you can perform login credentials

class Login extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    users: [],
    loadingStatus: true,
  };

  handleFieldChange = (evt) => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  handleLogin = (e) => {
    e.preventDefault();
    RegisterManager.getUserInfo(this.state.email, this.state.password).then(
      (users) => {
        if (users.length === 0) {
          window.alert("The login info is incorrect");
        } else {
          localStorage.setItem(
          "isAuthenticated", 
          true
          );
          localStorage.setItem(
            "credentials",
            JSON.stringify({
              email: this.state.email,
              password: this.state.password,
              userId: users[0].id,
            })
          );
          this.props.history.push("/home");
        }
      }
    );
  };

  componentDidMount() {
    RegisterManager.getAllUsers().then((users) => {
      this.setState({
        users: users,
        loadingStatus: false,
      });
    });
  }

  render() {
    return (
      <>
        <Segment placeholder>
          <Grid columns={2} relaxed="very" stackable>
            <Grid.Column>
              <Form onSubmit={this.handleLogin}>
                <Form.Input
                  id="email"
                  onChange={this.handleFieldChange}
                  icon="user"
                  iconPosition="left"
                  label="Email"
                  type="Email"
                  placeholder="Email"
                />
                <Form.Input
                  id="password"
                  onChange={this.handleFieldChange}
                  icon="lock"
                  iconPosition="left"
                  label="Password"
                  type="password"
                />

                <Button
                  type="submit"
                  disabled={this.state.loadingStatus}
                  content="Login"
                  primary
                />
              </Form>
            </Grid.Column>

            <Grid.Column verticalAlign="middle">
              <Button
                disabled={this.state.loadingStatus}
                content="Sign up"
                icon="signup"
                size="big"
                onClick={() => {
                  this.props.history.push("/register");
                }}
              />
            </Grid.Column>
          </Grid>

          <Divider vertical>Or</Divider>
        </Segment>
      </>
    );
  }
}
export default Login;
