import React, { Component } from "react"
import { Grid, Button, Typography } from "@material-ui/core"
import { connect } from "react-redux";

class App extends Component {

  render() {
    return (
      <Grid >
        <Grid >
          <Typography variant="h2" component="h1">
            0
        </Typography>
        </Grid>
        <Grid >
          <Button variant="contained" color="primary">
            Increase
        </Button>
          <Button variant="contained" color="primary">
            Decrease
        </Button>
        </Grid>
      </Grid>
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