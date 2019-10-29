import React,{ Component, Fragment } from "react";
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Page from "./page";

class Posts extends Component{
    render() {
        const {
            posts
        } = this.props;
        return (
            <Fragment>
                <Page posts={posts} />
            </Fragment>
        )
    }
}
const mapStateToProps = state => ({
    posts: state.posts,
    comments: state.comments
});

export default withRouter(
    connect(mapStateToProps)(Posts)
);