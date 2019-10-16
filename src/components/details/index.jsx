import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Page from './page';
import findCurrentItem from "../../redux/actions/findCurrentItem";

class Details extends Component {
    componentDidMount() {
        console.log('compoentDidMount'+this.props.match.params.itemId)
        this.props.findCurrentItem(parseInt(this.props.match.params.itemId)); //obtengo el parametro que lo provee withRouter
    }
    render() {
        const {
            currentItem,
        } = this.props;
        return (
            <Page
                currentItem={currentItem}
                goTo={(path) => {
                    this.props.history.push(path)
                }}
            />                        
        );
    }
}

const mapStateToProps = state => ({
    currentItem: state.currentItem
});

const mapDispathToProps = dispath => ({
    findCurrentItem: text => dispath(findCurrentItem(text))
})

export default withRouter(
    connect(mapStateToProps, mapDispathToProps)(Details)
);