import {useState, createContext, useReducer} from 'react';

export const PostsContext = createContext({
    posts: [],
    setPosts: () => {},
    // deletePost: ()=>{}
})

const INITIAL_STATE_VALUE = {
    posts: [],
}

export const PostsReducer = (state=INITIAL_STATE_VALUE, action) =>{
    const {type,payload} = action;
    switch(type){
        case 'ADD_NEW_POST':
            return{
                ...state,
                posts: [payload,...state.posts ]
            }
        case 'DELETE_POST':
            const newPosts = state.posts.filter(post => post.id !== payload.postId);
            return {
                ...state,
                posts: newPosts
            }
        case 'UPDATE_POST':
            return{
                ...state,
                posts: payload
            }
        default:
            return state;
    }
}

export const PostsProvider = ({children})=>{
    const [{posts},dispatch] = useReducer(PostsReducer,INITIAL_STATE_VALUE);
    
    // create post
    const setPosts = (post) =>{
        dispatch({type: 'ADD_NEW_POST',payload: post})
    }

    // delete post
    const deletePost = (postId) =>{
        dispatch({type: 'DELETE_POST',payload: postId})
    }

    // update post
    const updatePost = (postId) =>{
        dispatch({type:"UPDATE_POST",payload:postId})
    }
    const value = {
        posts,
        setPosts,
        deletePost,
        updatePost
    };
    return(
        <PostsContext.Provider value={value}>
            {children}
        </PostsContext.Provider>
    )
}