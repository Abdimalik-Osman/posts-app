import React,{useContext} from 'react'
import Post from './post'
import {PostsContext} from '../context/posts-context';
function Posts() {
  const {posts} = useContext(PostsContext);
  
  return (
    <div className="row mt-5">
    {posts.length > 0 && posts.map((post, index) => (
        <div className="col-lg-4 col-md-6 col-sm-12">
            <Post key={index} post={post} />
        </div>
    ))}
    </div>
  )
}

export default Posts