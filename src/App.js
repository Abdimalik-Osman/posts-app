import { useState, useContext } from 'react';
import './App.css';
import CreatePost from './components/create-post';
import Header from './components/header';
import Login from './components/login';
import Posts from './components/posts';
import {userContext} from './context/user-context';
function App() {
  const {currentUser} = useContext(userContext);
  if(!currentUser) return <Login />
  return (
    <div className="container">
          <Header/>
          <CreatePost /> 
          <Posts />
    </div>
  );
}

export default App;
