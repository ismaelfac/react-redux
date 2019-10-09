import React, { Fragment } from 'react';
import { CssBaseline } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import AppBar from '../appBar'

function Page(props){
    const {
        results
    } = props;
    const isEmpty = false;
    return (
        <Fragment>
            <CssBaseline />
            <AppBar/>

            <div className="results-page">
                {isEmpty ?
                        <Typography variant="h5" component="h3" className="page-message">
                            There are no results
                        </Typography>
                        :
                        results
                }
            </div>
        </Fragment>
    );
}

export default Page;