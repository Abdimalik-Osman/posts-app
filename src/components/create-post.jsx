import React, {useState,useRef,useContext} from 'react'
import {PostsContext} from '../context/posts-context';
import {userContext} from '../context/user-context';
function CreatePost() {
    const [author,setAuthor] = useState('');
    const [title,setTitle] = useState('');
    const [image,setImage] = useState('');
    
    const { currentUser} = useContext(userContext);
    const {setPosts} = useContext(PostsContext);
    const user = currentUser;
    // handle posts
    const  handleSubmit = (event) => {
        event.preventDefault();
        const newPosts = {author,title,image,id: new Date().getTime(), user};
        // setPosts((prev) => [newPosts, ...prev]);
        setPosts(newPosts)
        
    }
  return (
    <div>
        <form onSubmit={handleSubmit} className="shadow-lg w-50 m-auto p-4">
            <div className="form-group mb-2">
                <label htmlFor="author">Author</label>
                <input type="text" className="form-control" 
                onChange={(e)=> setAuthor(e.target.value)}
                placeholder="author" />
            </div>
            <div  className = "form-group mb-2" >
                <label htmlFor="title">Title</label>
                <input type="text" className="form-control"
                onChange={(e)=> setTitle(e.target.value)}
                 placeholder="Post Title" />
            </div>
            <div  className = "form-group mb-2" >
                <label htmlFor="image">Image</label>
                <input type="file"  className="form-control"
                onChange={(e)=> setImage(e.target.files[0])}
                 />
            </div>
            <div className="form-group">
                <button className="btn btn-primary btn-lg">SAVE</button>
                <button className="btn btn-success btn-lg mx-3">UPDATE</button>
            </div>
        </form>
    </div>
  )
}

export default CreatePost;