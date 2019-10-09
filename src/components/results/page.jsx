import React, { Fragment } from 'react';
import { CssBaseline } from '@material-ui/core';
import AppBar from '../appBar'

function Page(props){
    return (
        <Fragment>
            <CssBaseline />
            <AppBar/>
        </Fragment>
    );
}

export default Page;