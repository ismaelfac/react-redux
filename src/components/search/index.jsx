import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Page from "./page";

class Search extends Component {
    render(){
        return (
           <Page /> 
        )
    }
}

const mapStateToProps = state => {

}

const mapDispathToProps = dispath => {
    return {
        findSuggestions: text => dispath(findSuggestions(text)),
    };
}

export default withRouter(
    connect(mapStateToProps)(Search)
);