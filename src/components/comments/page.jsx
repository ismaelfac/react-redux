import React, { Fragment } from 'react';
import { makeStyles, CssBaseline, Typography, CardMedia, CardContent, CardActionArea, Card } from '@material-ui/core';
//components auxiliares
import AppBar from '../appBar'


const useStyles = makeStyles(theme => ({
    root: {
        paddingTop: '2rem',
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-around',
        alignContent: 'center'
    },
    card: {
        display: 'inline-block',
        padding: '1rem',
        margin: '1rem',
        maxWidth:'350px',
        minWidth:'300px'
    },
    cardMedia: {
        height: '140px'
    },
    pageMessage: {
        margin: 'auto'
    }
}));

const shortParagraph = (text) => {
    return text.substring(0,100)+' ...';
}

function Page(props){
    const {
        results,
        goTo
    } = props;
    const isEmpty = results.length === 0;
    const classes = useStyles();
    return (
        <Fragment>
            <CssBaseline />
            <AppBar/>

            <div className={classes.root}>
                {isEmpty ?
                    <Typography variant="h5" component="h3" className={classes.pageMessage}>
                        There are no results
                    </Typography>
                    :
                    results.map(item =>
                        <div
                            key={item.id}
                        >
                            <Card className={classes.card} onClick={() => goTo(`/details/${item.id}`)}>
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
                                            {shortParagraph(item.content)}
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