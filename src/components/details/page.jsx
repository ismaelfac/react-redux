import React, { Fragment } from 'react';
import { makeStyles, CssBaseline, Typography, Paper, CircularProgress, Button } from '@material-ui/core';
//components auxiliares
import AppBar from '../appBar'

const useStyles = makeStyles(theme => ({
    detailsPage: {
        padding: '3rem 1rem',
        display: 'flex',
        justifyContent: 'center'
    },
    paperContainer: {
        padding: '1rem'
    },
    content: {
        padding: '1rem 0rem'
    },
    itemImage: {
        width: '100%',
        height: '250px',
        backgroundRepeat:'no-repeat',
        backgroundSize:'contain',
        backgroundPosition: 'center'
    },
    itemLoader: {
        padding: '1rem'
    }
}));

function Page(props){
    const classes = useStyles();
    const {
        currentItem,
        goTo
    } = props;
    return (
        <Fragment>
            <CssBaseline />

            <AppBar />

            <div className={classes.detailsPage}>
                <Paper
                    elevation={1}
                    className={classes.paperContainer}
                >
                    {currentItem ?
                        <Fragment>
                            <Typography gutterBottom variant="h5" component="h2">
                                {currentItem.title}
                            </Typography>

                            <div
                                className={classes.itemImage}
                                style={{
                                    backgroundImage: `url(${currentItem.image})`,
                                }}
                            />

                            <Typography gutterBottom component="p" className={classes.content}>
                                {currentItem.content}
                            </Typography>
                        </Fragment>
                        :
                        <CircularProgress className={classes.itemLoader} />
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