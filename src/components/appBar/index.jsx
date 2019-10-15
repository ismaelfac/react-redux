import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from './page';
import findSuggestions from '../../redux/actions/findSuggestions';
import findResults from '../../redux/actions/findResults';

class IAppBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            text: ''
        };
        this.onChangeText = this.onChangeText.bind(this);
        this.onChangeSelection = this.onChangeSelection.bind(this);
    }
    onChangeText(text) {
        this.setState({text});
        this.props.findSuggestions(text);

    }
    onChangeSelection(text) {
        console.log('onChangeSelection')
        this.setState({text});
        this.props.findResults(text);
    }
    render() {
        const { text } = this.state;
        const { suggestions } = this.props;
        return (
            <Page 
                text={text}
                suggestions={suggestions}
                onChangeText={this.onChangeText}
                onChangeSelection={this.onChangeSelection}
            />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        suggestions: state.suggestions
    };
};

const mapDispathToProps = (dispath) => {
    return {
        findSuggestions: text => dispath(findSuggestions(text)),
        findResults: text => dispath(findResults(text))
    };
}

export default connect(mapStateToProps, mapDispathToProps)(IAppBar);