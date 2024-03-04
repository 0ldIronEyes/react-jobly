import React, { useState } from "react";
import { useHistory } from "react-router-dom";


//shows sign up page. 
// routed on /signup
function SignUpPage( {signup})
{
    const history= useHistory();
    const [formData, setFormData] = useState(
        {
            username: "",
            password: "",
            firstName: "",
            lastName: "",
            email: ""
        }
    )

    async function onChange(evt)
    {
        const {name, value }= evt.target;
        setFormData(form => ({...form, [name]: value}))
    }


    async function onSubmit(evt)
    {
        evt.preventDefault();
        let result = await signup(formData);
        if (result.success)
        {
            history.push("/");
        }
    }

    return(
        <div className="mb-4">
            <h2> Sign Up</h2>
            <div>
                <form className="form-inline" onSubmit={onSubmit}>
                    <div>
                        <label> Username</label>
                        <input name="username" value={formData.username} onChange={onChange}> </input>
                    </div>
                    <div>
                        <label> Password</label>
                        <input name="password" value={formData.password} onChange={onChange}> </input>
                    </div>
                    <div>
                        <label> firstName</label>
                        <input name="firstName" value={formData.firstName} onChange={onChange}> </input>
                    </div>
                    <div>
                        <label> lastName</label>
                        <input name="lastName" value={formData.lastName} onChange={onChange}> </input>
                    </div>
                    <div>
                        <label> email</label>
                        <input name="email" value={formData.email} onChange={onChange}> </input>
                    </div>
                    <button className="btn btn-lg btn-primary" type="submit" onSubmit={onSubmit}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default SignUpPage;
