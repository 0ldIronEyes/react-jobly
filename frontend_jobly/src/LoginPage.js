import React, { useState } from "react";
import {useHistory} from "react-router-dom";


//login page that renders the login form.
//routed at /login
function LoginPage( {login}){
    const history = useHistory();
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    //submits login form, sends to home page
    async function handleSubmit(evt) {
        evt.preventDefault();
        let result = await login(formData);
        if (result.success){
            history.push('/')
        }else {
            setFormErrors(result.errors);
        }
    }

    function handleChange(evt) {
        const {name, value } = evt.target;
        setFormData(form => ({...form, [name]: value}));
    }

    return (
        <div>
            <h3> Log In </h3>
            <div className="container col-md-6 offset-md-3 col-lg-4 offset-lg-4">
                <form onSubmit={handleSubmit}>
                    <label>Username</label>
                    <input className="form-control" name="username" value= {formData.username} onChange={handleChange} required></input>
                    <input className="form-control" name="password" value= {formData.password} onChange={handleChange} required></input>
                    <button className="btn btn-primary" onSubmit={handleSubmit}> Submit </button>
                </form>
            </div>

        </div>
    )
}
export default LoginPage;