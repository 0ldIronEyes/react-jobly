import React, { useState, useEffect } from "react";
import useLocalStorage from "./hooks/useLocalStorage";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes-nav/Routes";
import jwt from "jsonwebtoken";
import JoblyApi from "../api.js";
import LoadingPage from "./LoadingPage.js";
export const TOKEN = "token-for-app";


function App() {
    const UserContext = React.createContext();
    const [currentUser, setCurrentUser] = useState(null);
    const [jobsApplied, setJobsApplied] = useState([]);
    const [token, setToken] = useLocalStorage(TOKEN);
    const [loading, setLoading] = useState(true);


    // load user info, runs dependant on token
    useEffect(function loadUserInfo() {

        async function getCurrentUser() {
            if (token) {
                try {
                    let {username} = jwt.decode(token);
                    JoblyApi.token = token;
                    let getCurrentUser = await JoblyApi.getCurrentUser(username);
                    setCurrentUser(getCurrentUser);
                    
                }
                catch(error)
                {
                    console.error(error);
                    setCurrentUser(null);
                }
            }
            setLoading(false)
        }
        getCurrentUser();
    }, [token]);

    // handles sign up
    async function signup(data)
    {
        try{
            let token = await JoblyApi.signup(data);
            setToken(token);
            return { success: true };
        }
        catch (error)
        {
            console.error(error);
            return { success: false };
        }
    }

    // handles log in
    async function login(data) {
        try {
            let token = await JoblyApi.login(data); 
            setToken(token);
            return { success : true};
        }
        catch (error)
        {
            console.error(error);
            return { success : false, error: error}
        }
    }

    // handle logout
    function logout() {
        setCurrentUser(null);
        setToken(null);
    }
 
    //set apply to job for user
    function applyToJob(id) {
        if (!jobsApplied.includes(id))
        {
            JoblyApi.applyToJob(currentUser.username, id);
            setJobsApplied([...jobsApplied, id]);
        }
      }
    
    
    if (loading) return <LoadingPage />;


    return ( 
        <BrowserRouter>
            <UserContext.Provider value = { {currentUser, setCurrentUser, applyToJob, jobsApplied}} >
            <Routes login={login} signup={signup} user = {currentUser}/>
            </UserContext.Provider>
        </BrowserRouter>
    )

}

