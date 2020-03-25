import React, { Component } from "react"
import { Grid, Button } from "@material-ui/core"
import { connect } from "react-redux"
import { showlist } from "../src/actions/index"

class Todo extends Component {

    getData = () => {

        fetch('http://jsonplaceholder.typicode.com/posts').then(results => {
            return results.json();
        }).then(data => {
            console.log(data);
        })

        //dispatch(showlist)
    }
    render() {
        return (
            <Grid>
                <Button variant="contained" color="primary" onClick={() => { this.getData() }}>
                    List post
                </Button>
            </Grid>
        )
    }
}

function mapStateToProps(state) {
    const counter = state
    return {
        counter
    }
}

export default connect(mapStateToProps)(Todo);