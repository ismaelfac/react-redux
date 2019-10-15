import React, { Fragment } from 'react';
import AppBar from '../appBar'
import { Grid, makeStyles, CssBaseline, Typography, CardMedia, CardContent, CardActionArea, Card } from '@material-ui/core';
import './style.css';

const useStyles = makeStyles(theme => ({
    root: {

    },
    card: {
        display: 'flex',
        padding: '1rem',
        margin: '1rem',
        maxWidth:'380px'
    }
}));

function Page(props){
    const {
        results
    } = props;
    const isEmpty = results.length === 0;
    const classes = useStyles();
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
                    results.map(item =>
                        <Grid
                            container justify="center" alignItems="center"
                            key={item.id}
                        >
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardMedia
                                        className="card-media"
                                        image={item.image}
                                        title={item.title}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {item.title}
                                        </Typography>
                                        <Typography component="p">
                                            {item.content}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>          
                    </Grid>)                    
                }
            </div>
        </Fragment>
    );
}

export default Page;