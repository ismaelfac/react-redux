import React from 'react';
import { makeStyles, FormControl, Input, InputLabel, Button } from '@material-ui/core';
import { withFormik } from "formik";

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
  },
}));

function MyForm(props) {
  const classes = useStyles();

  const {
      isSubmitting,
      handleSubmit,
      handleChange,
      handleBlur,
      values,
      errors
  } = props;

  return (
    <form onSubmit={handleSubmit} className={classes.container}>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="email">Email</InputLabel>
        <Input id="email" name="email" type="email" onChange={handleChange} onBlur={handleBlur} value={values.email} />
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="password">Password</InputLabel>
        <Input id="password" name="password" type="password" onChange={handleChange} onBlur={handleBlur} value={values.password} />
      </FormControl>
      <Button color="primary" type="submit" disabled={isSubmitting}> Submit</Button>
    </form>
  );
}

export default withFormik({
    mapPropsToValues(props){
        return {
            email: props.email,
            password: ''
        }
    },
    validate(values){
        const errors = {}
        if(!values.password){
            errors.password =  'Password is required'
        }else if(values.password.length < 8){
            errors.password = 'Password must be at least 8 charact';
        }
        return errors;
    },
    handleSubmit(values, formikBag){
        formikBag.setSubmitting(false);
        console.log(values);
    }
})(MyForm);