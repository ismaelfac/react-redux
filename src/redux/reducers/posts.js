import { handleActions } from "redux-actions";
import { createPost, getPosts } from "../actions/posts";
import routes from "../../services/api";

export default handleActions({
    [createPost]: (state, action) => {
        console.log('handleActions CreatePost')
        return [...state, action.payload];
    },
    [getPosts]: (action) => {
        console.log(routes);
        return action.payload;
    }
}, []);