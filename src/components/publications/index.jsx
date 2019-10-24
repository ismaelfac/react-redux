import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Publications extends Component {
    constructor(props) {
        super(props);

        this.state = {
            
        };
    }
    render() {
        const {
            
        } = this.props;
        return (
            <div>
                <h1>Publications</h1>
            </div>                        
        );
    }
}

const mapStateToProps = state => ({
});

export default withRouter(
    connect(mapStateToProps)(Publications)
);