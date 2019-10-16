import React, { Fragment } from 'react';
import { makeStyles, CssBaseline, Typography, CardMedia, CardContent, CardActionArea, Card } from '@material-ui/core';
//components auxiliares
import AppBar from '../appBar'


const useStyles = makeStyles(theme => ({
    root: {
        padding: '3rem 1rem',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    card: {
        display: 'flex',
        padding: '1rem',
        margin: '1rem',
        maxWidth:'30%',
        minWidth:'350px'
    },
    cardMedia: {
        height: '140px'
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

            <div className={classes.root}>
                {isEmpty ?
                    <Typography variant="h5" component="h3" className="page-message">
                        There are no results
                    </Typography>
                    :
                    results.map(item =>
                        <div
                            key={item.id}
                        >
                            <Card className={classes.card}>
                                <CardActionArea>
                                    <CardMedia
                                        className={classes.cardMedia}
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
                    </div>)                    
                }
            </div>
        </Fragment>
    );
}

export default Page;