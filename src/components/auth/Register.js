import React, { Component } from "react";
import RegisterManager from "../../modules/RegisterManager";
import {
  Grid,
  Form,
  Divider,
  Button,
  Segment,
  Icon,
  Modal,
} from "semantic-ui-react";


//1) register = create
//2) check database if the user or email exists compare that to state and if that's in state then you can compare the login then if that works then you can perform login credentials 

class Register extends Component {
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
    let login = false;
    let loginUserId = 0;
    /*
            For now, just store the email and password that
            the customer enters into local storage.
        */ this.state.users.forEach(
      (user) => {
        if (
          this.state.email === user.email &&
          this.state.password === user.password
        ) {
          login = true;
          loginUserId = user.id;
        }
      }
    );
    if (login === true) {
      localStorage.setItem("userId", loginUserId);
      this.props.history.push("/");
    } else {
      window.alert("Your email and password combination was not recognized!");
    }
  };
  /*  Local method for validation, set loadingStatus, create animal      object, invoke the AnimalManager post method, and redirect to the full animal list
   */
  constructNewUser = (evt) => {
    evt.preventDefault();
    this.setState({ loadingStatus: true });
    if (
      this.state.name === "" ||
      this.state.email === "" ||
      this.state.password === ""
    ) {
      window.alert("Please input all fields");
    } else {
      let register = true;

      this.state.users.forEach((user) => {
        if (user.email == this.state.email && register == true) {
          window.alert("This email address has already been taken!");
          register = false;
        } else {
        }
      });

      if (register === true) {
        const newUser = {
          name: this.state.name,
          email: this.state.email,
          password: this.state.password,
        };
        RegisterManager.post(newUser).then(() => this.props.history.push("/"));
      } else {
        this.setState({ loadingStatus: false });
      }
    }
  };

  componentDidMount() {
    //getAll from TaskManager and hang on to that data; put it in state

    RegisterManager.getAll().then((users) => {
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
                  onChange={this.handleFieldChange}
                  icon="user"
                  iconPosition="left"
                  label="Email"
                  type="Email"
                  placeholder="Email"
                />
                <Form.Input
                  onChange={this.handleFieldChange}
                  icon="lock"
                  iconPosition="left"
                  label="Password"
                  type="password"
                />

                <Button
                  disabled={this.state.loadingStatus}
                  content="Login"
                  primary
                />
              </Form>
            </Grid.Column>

            <Grid.Column verticalAlign="middle">
              <Modal
                trigger={
                  <Button
                    disabled={this.state.loadingStatus}
                    content="Sign up"
                    icon="signup"
                    size="big"
                  />
                }
              >
                <Modal.Content>
                  <Form onSubmit={this.constructNewUser}>
                    <Form.Field>
                      <label>Name</label>
                      <input
                        onChange={this.handleFieldChange}
                        placeholder="Name"
                      />
                    </Form.Field>
                    <Form.Field>
                      <label>Email</label>
                      <input
                        onChange={this.handleFieldChange}
                        type="email"
                        placeholder="Email"
                      />
                    </Form.Field>
                    <Form.Field>
                      <label>Password</label>
                      <input
                        onChange={this.handleFieldChange}
                        type="password"
                        placeholder="Password"
                      />
                    </Form.Field>
                    <Button
                      onClick={() => {
                        this.props.history.push("/");
                      }}
                      type="submit"
                    >
                      Submit
                    </Button>
                  </Form>
                </Modal.Content>
              </Modal>
            </Grid.Column>
          </Grid>

          <Divider vertical>Or</Divider>
        </Segment>
      </>
    );
  }
}
export default Register;
