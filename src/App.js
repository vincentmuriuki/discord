import React, { useEffect } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import { useSelector, useDispatch } from 'react-redux';
import { selectUser } from './features/userSlice';
import Login from './components/Login'
import { auth } from './firebase/firebase';
import { login, logout } from './features/userSlice'

function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  // useEffect runs once once components loads
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log(authUser)
      if (authUser) {
        // user is logged in
        dispatch(
          login({
            uid: authUser.uid,
            displayName: authUser.displayName,
            photo: authUser.photoURL,
            email: authUser.email
          })
        )
      } else {
        // user is logged out
        dispatch(logout())
      }
    })
  }, [dispatch])

  return (
    // BEM naming convention
    <div className='app'>
      {user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (
        <Login />
      )}
      
    </div>
  );
}

export default App;
