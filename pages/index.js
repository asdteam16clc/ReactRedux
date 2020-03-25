import React, { Component } from "react"
import { Grid, Button, Typography } from "@material-ui/core"
import { connect } from "react-redux";
import Todo from "../components/TODO"

class App extends Component {

  render() {
    return (
      <Todo></Todo>
    )
  }
}

const mapStateToProps = state => {
  const { counter } = state;
  return {
    counter
  }
}

export default connect(mapStateToProps)(App);