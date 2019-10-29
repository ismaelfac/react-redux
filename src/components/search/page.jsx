import React from 'react';
import { withFormik } from "formik"
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        flexFlow: 'row wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: '5em'
      },
      input: {
        marginLeft: theme.spacing(1),
        flex: 1,
      },
      iconButton: {
        padding: 10,
      },
      divider: {
        height: 28,
        margin: 4,
      }
}));

const btn_search = () => {
    alert("btn search")
}

function Page(props){
    const classes = useStyles();
    const {
        posts,
        comments,
        isSubmitting,
        handleSubmit,
        handleChange,
        handleBlur,
        values
    } = props;
    return (
        <Paper className={classes.root}>
            <IconButton className={classes.iconButton} aria-label="menu">
                <MenuIcon />
            </IconButton>
            <InputBase
                className={classes.input}
                placeholder="Posts"
                inputProps={{ 'aria-label': 'search google maps' }}
            />
            <IconButton className={classes.iconButton} aria-label="search" onClick={btn_search}>
                <SearchIcon />
            </IconButton>
        </Paper>      
    );
}

export default withFormik({
    handleSubmit(values, formikBag){

    }
})(Page);