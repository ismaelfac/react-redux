import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import Post from "../posts/page";
import { 
    createPost as createPostAction,
    getPosts as getPostsAction
 } from "../../redux/actions/posts";

class Publications extends Component {
    state = {}

    componentDidMount(){
        const { getPosts } = this.props;
        getPosts();
    }
    render() {
        const {
            posts,
            createPost
        } = this.props
        return (
            <div>
                <h1>Publications</h1>
                {posts.map(post => (
                    <Post 
                        key={post.id}
                        id={post.id}
                        title={post.title}
                        content={post.content}
                    />
                ))}
            </div>                        
        );
    }
}

const mapStateToProps = state => ({
    posts: state.posts
});

const mapDispathToProps = {
    createPost: createPostAction,
    getPosts: getPostsAction
}

export default withRouter(
    connect(mapStateToProps, mapDispathToProps)(Publications)
);