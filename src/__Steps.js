/*

-------------------------
initial setup
-----------------------

1. visit: console.firebase.google.com
2. create project(skip google analytics)
3. Register app (create config)
4. install firebase : npm install firebase
5. add config file to your project

------------------------
integration
-----------------------

6. Visit : Go to Docs > Build > Authentication > Web > Get Started
7. export app from the firebase.config.js file: export default app
8. Login.jsx: import getAuth from firebase/auth
9.create const auth= getAuth(app)
---------------------
provider setup
--------------------

10. import googleAuthProvider 
11. use signInWithPopup and pass auth and provider
12.activate sign-in method (google, facebook, github,etc)
13. [vite]: Change 127.0.0.1 to localhost

------------------------------
More Auth Provider
----------------------------
1. activate the auth provider (create app, provider redirect url, client id, client secret )
*/ 