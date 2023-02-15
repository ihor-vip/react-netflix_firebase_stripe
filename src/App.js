import React, {useEffect} from 'react';
import './App.css';
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import {auth} from "./firebase";

function App() {
    const user = null;

    useEffect(() => {
       const unsubscribe =  auth.onAuthStateChanged(userAuth => {
            if (userAuth) {

            } else {

            }
        })
        return () => {
           unsubscribe()
        }

    },[])

    const router = createBrowserRouter([
        {
            path: "/",
            element: <div className='app'><HomeScreen/></div>,
        },
        {
            path: '/login',
            element: <div><LoginScreen/></div>
        }
    ]);

    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
}

export default App;
