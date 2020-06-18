import React, { Component } from "react"
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'fontsource-roboto';
// import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
// import ThreeDRotation from '@material-ui/icons/ThreeDRotation';


class BBB extends Component {
  render() {
    return (
      <>
        <NavBar />
        <ApplicationViews />
      </>
    );
  }
}

export default BBB;