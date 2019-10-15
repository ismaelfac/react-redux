import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Page from './page';

class Results extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };

    }

    render() {
        const {
            results,
        } = this.props;
        results.map(l => console.log('results: '+l.id))
        return (
            <Page
                results={results}
            />            
        );
    }
}

const mapStateToProps = state => ({
    results: state.results
});

export default withRouter(
    connect(mapStateToProps)(Results)
);