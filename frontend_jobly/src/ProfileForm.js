import React, {useState, useContext } from "react";
import JoblyApi from "../api.js";

// shows the profile edit for for making changes to user's profile
//routed as /profile
function ProfileForm(){

    const UserContext = React.createContext();
    const { currentUser, setCurrentUser } = useContext(UserContext);

    const [formData, setFormData] =useState(
         {firstName: currentUser.firstname, 
            lastName: currentUser.lastName, 
            email: currentUser.email,
            username: currentUser.username,
            password: ""
        });

    //handles form submission, upcalls API and sets current user to updated info
    async function handleSubmit(evt) {
        evt.preventDefault();

        let profileData = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            username: formData.username,
            password: formData.password
        };

        let username = formData.username;

        try{
            let result = await JoblyApi.saveProfile(username, profileData);
            setCurrentUser(result);
            setFormData(data=> ({...data, password: ""}));
            

        } catch (error)
        {
            console.error(error);
        }
    }

    //shows changes in form
    function handleChange(evt)
    {
        const {name, value} = evt.target;
        setFormData(f=> ({
            ...f, [name]: [value],
        }));
    }

    return (
        <div className="col-md-6 col-lg-4">
            <h2> Update Profile </h2>
            <div className="card">
                <form>
                <div className="form-group">
                    <label> Username </label>
                    <input className="form-control" name="username" value={formData.username} onChange={handleChange}></input>
                </div>
                <div className="form-group">
                    <label> First Name </label>
                    <input className="form-control" name="firstName" value={formData.firstName} onChange={handleChange}></input>
                </div>
                <div className="form-group">
                    <label>Last Name </label>
                    <input className="form-control" name="lastName" value={formData.lastName} onChange={handleChange}></input>
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input className="form-control" name="email" value={formData.email} onChange={handleChange}></input>
                </div>
                <div className="form-group">
                    <label> Enter password to confirm</label>
                    <input className="form-control" name="password" value={formData.password} onChange={handleChange}></input>
                </div>
                <button className="btn btn-primary" onClick={handleSubmit}> 
                    Submit
                </button>
                </form>
            </div>
        </div>
    )
}

export default ProfileForm