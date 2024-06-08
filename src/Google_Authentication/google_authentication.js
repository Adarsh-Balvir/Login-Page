import React from 'react';
import './google_authentication.css'; // Ensure the correct import of the CSS file
import { GoogleLogin } from 'react-google-login';

const clientId = '116372411694-33k8fclicnhsb13v0abpaa76j1fib55l.apps.googleusercontent.com';

const Googleauthentication = () => {

    const onSuccess = (response) => {
        console.log('Login Success: currentUser:', response.profileObj);
    };

    const onFailure = (response) => {
        console.log('Login failed: res:', response);
    };

    return (
        <div className="google-login-container input-box rounded-2">
            <GoogleLogin
                clientId={clientId}
                buttonText="Login with Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                className="google-login-button"
                isSignedIn={true}
            />
        </div>
    );
};

export default Googleauthentication;
