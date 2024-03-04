import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "style.css";

// homepage that either welcomes logged in user or shows options to sign up or log in if not
// routed at /
function Homepage() {
    const UserContext = React.createContext();
    const { currentUser } = useContext(UserContext);

    return( 
        <div className="Homepage">
            <p> <h2> Welcome to Jobly </h2>{currentUser ? <p> {currentUser.username}</p> : 
           ( <div className="btn btn-primary"> <Link to="/login"> Login </Link> 
           <Link className="btn btn-primary" to="/signup"> Sign up</Link> </div> )} </p> 
        </div>
    )
} 

export default Homepage;