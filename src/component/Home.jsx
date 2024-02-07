import React from 'react'
// import img2 from "app\src\image\Vector 7.png"
// import './App.css'
import { useAuth0 } from "@auth0/auth0-react";
import './Home.css'
import GoogleIcon from '@mui/icons-material/Google';
// import reactLogo from './assets/react.svg'
// import img1 from './assets/1.png';

function Home() {
    const { loginWithRedirect } = useAuth0();
  return (
    <>
       <div className="pp">
        <h1>BASE</h1>
       </div>
       {/* <img src={img1} alt="" /> */}
       
        {/* <h1>BASE</h1> */}
       

    <div className="form">
    <form className='for'>
    <h1 className="title">Sign in</h1>
    <p>sign in to your acount</p>
    <button className='tttt' onClick={() => loginWithRedirect()}>sign with google</button>
      <div className='inputContainer'>
        <label htmlFor="username">Fullname</label>
        <input type="text" name='username' id='username'/>
      </div>
      <div className='inputContainer'>
        <label htmlFor="email">email</label>
        <input type="text" name='email' id='username'/>
      </div>
      <div className='inputContainer'>
        <label htmlFor="password">password</label>
        <input type="text" name='password' id='username'/>
      </div>
      <div className="but">
      <button className='butt' onClick={() => loginWithRedirect()}>Log In</button>
      {/* <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
      Log Out
    </button> */}


      </div>
    </form>

    </div>
    
    

      {/* <div className="body">

      <h1>this is santosh</h1>
      <div className="but">
      <button className='butt' onClick={() => loginWithRedirect()}>Log In</button>;

      </div>
        </div>  */}
      
    </>
  )
}

export default Home
