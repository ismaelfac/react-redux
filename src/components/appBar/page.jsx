import React from 'react'
import {AppBar, Toolbar, Typography } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AutoComplete from '../autocomplete';
import './style.css';

function Page(props) {
    const {
        text,
        suggestions,
        onChangeText,
        onChangeSelection,
    } = props;
    return (
        <AppBar position="static">
            <Toolbar className="appBar">
                <Typography variant="h6" color="inherit">
                    React - Redux - Formik - HOC
                </Typography>
                <AutoComplete 
                    text={text}
                    suggestions={suggestions}
                    onChangeText={onChangeText}
                    onChangeSelection={onChangeSelection}
                />
                <AccountCircle/>
            </Toolbar>
        </AppBar>
    );
}
export default Page;
