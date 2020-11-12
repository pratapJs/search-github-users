import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom"
import GlobalStyles from "../src/globals/GlobalStyle"
import {GithubProvider} from "./context/context"
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Auth0Provider} from '@auth0/auth0-react'



ReactDOM.render(
  <Router>
    <GlobalStyles/>
    <Auth0Provider
    domain="dev-b9mqf-fa.au.auth0.com"
    clientId="7fvzcW7KSvmddM6rENkFvYcQYpesK7hi"
    redirectUri={window.location.origin}
    cacheLocation="localstorage">
    <GithubProvider>   <App /> </GithubProvider>
    </Auth0Provider>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
