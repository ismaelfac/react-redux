import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Page from './page';
class Results extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {
            results,
        } = this.props;
        return (
            <div>
                <Page
                    results={results}
                    goTo={(path) => {
                        this.props.history.push(path)
                    }}
                />
            </div>                        
        );
    }
}

const mapStateToProps = state => ({
    results: state.results
});

export default withRouter(
    connect(mapStateToProps)(Results)
);