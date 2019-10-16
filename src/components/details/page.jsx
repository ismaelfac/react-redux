import React, { Fragment } from 'react';
import { CssBaseline, Typography, Paper, CircularProgress, Button } from '@material-ui/core';
//components auxiliares
import AppBar from '../appBar'

function Page(props){
    const {
        currentItem,
        goTo
    } = props;
    return (
        <Fragment>
            <CssBaseline />

            <AppBar />

            <div className="details-page">
                <Paper
                    elevation={1}
                    className="paper-container"
                >
                    {currentItem ?
                        <Fragment>
                            <Typography gutterBottom variant="h5" component="h2">
                                {currentItem.title}
                            </Typography>

                            <div
                                className="item-image"
                                style={{
                                    backgroundImage: `url(${currentItem.image})`,
                                }}
                            />

                            <Typography gutterBottom component="p" className="content">
                                {currentItem.content}
                            </Typography>
                        </Fragment>
                        :
                        <CircularProgress className="item-loader" />
                    }

                    <Button
                        color="primary"
                        onClick={() => goTo('/results')}
                    >
                        Back
                    </Button>
                </Paper>
            </div>
        </Fragment>
    );
}

export default Page;