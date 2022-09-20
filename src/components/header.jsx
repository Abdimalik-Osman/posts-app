import React, {useContext} from 'react'
import {userContext} from '../context/user-context';
function Header() {
  const {currentUser,setCurrentUser} = useContext(userContext);
  return (
    <div>
        <h1 className="text-center">Welcome: {currentUser} <button  className="btn btn-primary" onClick={()=>setCurrentUser('')}>LOGOUT</button></h1>
    </div>
  )
}

export default Header;