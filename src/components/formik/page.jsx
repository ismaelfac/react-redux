import React from "react";
import { withFormik } from "formik";
import Button from '@material-ui/core/Button';

function Myform(props) {
    const {
        handleSubmit,
        isSubmitting
    } = props;
    return (
        <form onSubmit={handleSubmit}>
            <input name="text" type="email"/>
            <input name="password" type="password"/>
            <Button type="submit" disabled={isSubmitting} color="primary"> Submit</Button>
        </form>
    );
}

export default withFormik({
    handleSubmit(values, formikBag) {
        console.log(values);
        formikBag.setSubmitting(false);      
    }
})(Myform);