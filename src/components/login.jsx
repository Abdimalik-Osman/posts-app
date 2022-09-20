import React,{useState, useContext} from 'react'
import {userContext} from '../context/user-context';
function Login() {
    const [username,setUsername] = useState('');
    const {setCurrentUser} = useContext(userContext);
    // handle submit
    const handleSubmit = (event) => {
        event.preventDefault();
        if(username.length < 5){
            alert('username can not be less than 5 characters');
            return;
        }
        
        setCurrentUser(username);
    }
  return (
    <div>
        <h1 className="text-center fw-bolder">LOGIN FORM</h1>
        <form onSubmit={handleSubmit} className="shadow p-5 w-50 m-auto">
            <div className="form-group mb-3">
                <label htmlFor="username">Username</label>
                <input type="text" className="form-control"
                onChange={(event) => setUsername(event.target.value)}
                 placeholder="Enter Username" />
            </div>
            <div className="form-group">
                <button className="btn btn-primary">LOGIN</button>
            </div>
        </form>
     </div>
  )
}

export default Login;