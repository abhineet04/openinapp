import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import Rout from './Rout.jsx'
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <Auth0Provider
    domain="dev-m3takfex5fu54kub.us.auth0.com"
    clientId="8mBg2bwpCKd7uYOzHDqh7JWRstaVIenb"
    authorizationParams={{
      redirect_uri: "http://127.0.0.1:5173/Upload"
    }}
  >
     {/* <AppProvider> */}
      
      <App/>
      {/* <Upload/> */}
      <Rout/>
      {/* <Button/> */}
     {/* </AppProvider> */}
    </Auth0Provider>

 
  </>

  
  // <React.StrictMode>
    // <App />
   
  // </React.StrictMode>,
)
