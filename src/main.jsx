import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GithubProvider } from "./context/context.jsx";
import { Auth0Provider } from "@auth0/auth0-react";

//domain:dev-dev-jdk8psieefeyxnum.us.auth0.com
// client id:MaX98lLVmbCQTG1YAj2eITz7Iq1hkwvn

ReactDOM.createRoot(document.getElementById("root")).render(

    <Auth0Provider
      domain="dev-jdk8psieefeyxnum.us.auth0.com"
      clientId="MaX98lLVmbCQTG1YAj2eITz7Iq1hkwvn"
      authorizationParams={{
        redirect_uri: window.location.origin
       }}
       cacheLocation="localstorage"
   
    >
      <GithubProvider>
        <App />
      </GithubProvider>
    </Auth0Provider>

);
