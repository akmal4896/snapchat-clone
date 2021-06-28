import React, { useEffect } from 'react';
import './App.css';
import WebCamCapture from './WebcamCapture'
import Preview from './Preview'
import Chats from './Chats'
import ChatView from './ChatView'
import Login from './Login'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { login, logout, selectUser } from './features/appSlice';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from './firebase';

function App() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if(authUser){
        dispatch(login({
          username: authUser.displayName,
          profilePic: authUser.photoURL,
          id: authUser.uid,
      })) 
      }else {
        dispatch(logout())
      }
    })
  }, [])

  return (
    <div className="app">
      <Router>
        {!user ? (<Login />) :
          (
            <>
              <img className={"app__logo"}src={"https://scx2.b-cdn.net/gfx/news/2017/1-snapchat.jpg"} alt={"snapchat"}/>
              <div className={"app__body"}>
                <div className={"app__bodyBackground"}>
                <Switch>
                  <Route path={"/chats/view"}>
                    <ChatView />
                  </Route>

                  <Route path={"/chats"}>
                    <Chats />
                  </Route>

                  <Route path={"/preview"}>
                    <Preview />
                  </Route>

                  <Route exact path={"/"}>
                    <WebCamCapture />
                  </Route>

                  </Switch>
                </div>
              </div>
            </>
          )
        }
        
      </Router>

      
    </div>
  );
}

export default App;
