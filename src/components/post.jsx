import React,{useContext} from 'react'
import {userContext} from '../context/user-context';
import {PostsContext} from '../context/posts-context';
function Post({post}) {
  const {currentUser} =  useContext(userContext);
  const {deletePost} = useContext(PostsContext);

  const isCurrentUser = currentUser === post.user

  // handle delete
  const handleDelete = () => {
        deletePost({postId:post.id});
    }

    // handle update
    const handleUpdate = () =>{
      const author  = post.author;
      const title  = post.title;
      const image  = post.image;
      
    }
  return (
    <div className='card shadow-lg my-2'>
          <div className="card-header bg-secondary text-light">
           <h2 className="fw-bolder">{post.title}</h2>
            <span>Author: {post.author}</span>
          </div>
         <div className="card-body">
           {post.image && <img src={URL.createObjectURL(post.image)} width="380" height="300"alt="" />}
          {
            isCurrentUser && <div><button className="btn btn-success btn-sm m-3" onClick={handleUpdate}>UPDATE</button>
          <button className="btn btn-danger btn-sm" onClick={handleDelete}>DELETE</button></div>
          }
         </div>
    </div>
  )
}

export default Post
