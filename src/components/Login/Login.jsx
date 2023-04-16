import React, { useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from '../../Firebase/Firebase.init';

const Login = () => {
    const [user, setUser] = useState(null);
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSingIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                setUser(user)
            })
            .catch(error => {
                console.log('error', error.message)
            })
    }

    const handleGithubSingIn = ()=>{
        signInWithPopup(auth, githubProvider)
        .then (result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            setUser(loggedUser)
        })
        .catch()
    }
    const handleSignOut = () => {
        signOut(auth)
            .then(result => {
                setUser(null)
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div>
            {user ?
                <button onClick={handleSignOut}>Sign Out</button> :
                <div>
                    <button onClick={handleGoogleSingIn}>Google Login</button>

                    <button onClick={handleGithubSingIn}>GitHub Login</button>
                </div>

            }

            {user && <div>
                <h3>User: {user.displayName}</h3>
                <p>Email: {user.email}</p>
                <img src={user.photoURL} alt="" />
            </div>}
        </div>
    );
};

export default Login;