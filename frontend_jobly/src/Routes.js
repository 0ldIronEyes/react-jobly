import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";
import CompanyList from "./CompanyList";
import CompanyDetail from "./CompanyDetail";
import JobList from "./JobList";
import ProfileForm from "./ProfileForm";

function Routes({login, signup, user} ) {

    if (user)
    {
        //routes for when logged in
        <div>
        <Switch>
            <Route exact path="/"> <Homepage></Homepage></Route>
            <Route exact path="/login"> <LoginPage login={login} /></Route>
            <Route exact path="/signup"> <SignUpPage signup={signup} /></Route>
            <Route exact path="/companies"> <CompanyList /></Route>
            <Route exact path="/companies/:handle"> <CompanyDetail /></Route>
            <Route exact path="/jobs"> <JobList /> </Route>
            <Route exact path="/profile"> <ProfileForm /> </Route>
            <Redirect to="/" />
        </Switch>
        </div>
    }
    //routes for when logged out
    return (
        <div>
        <Switch> 
            <Route exact path="/login"> <LoginPage login={login} /></Route>
            <Route exact path="/signup"> <SignUpPage signup={signup} /></Route>
            <Redirect to="/" />
        </Switch>
        </div>
    );
}

export default Routes;