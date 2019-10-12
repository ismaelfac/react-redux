import React, { Fragment } from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '../appBar'

function Page(props){
    const {
        results,
        goTo
    } = props;
    const isEmpty = results.length === 0;
    console.log('results: '+results)
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
                        <div
                            key={item.id} 
                            className="card-container"
                        >
                            <Card className="card" onClick={() => goTo(`/details/${item.id}`)}>

                            </Card>
                            
                        </div>    
                    )
                }
            </div>
        </Fragment>
    );
}

export default Page;