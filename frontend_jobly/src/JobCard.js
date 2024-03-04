import React, {useContext, useState} from "react";
import "style.css";

//shows basic job info, allows user to apply
function JobCard( {id,title,salary, equity, companyName}) {
    const UserContext = React.createContext();
    const { applyToJob, jobsApplied} = useContext(UserContext);

    async function Apply(evt)
    {
        if (jobsApplied.contains(id)) 
        {
            applyToJob(id);
        }
    }

    function alreadyApplied(){
        return jobsApplied.includes(id);
    }

    return(
        <div className="JobCard">
            <div>
                <h6> {title} </h6>
                <p>{companyName} </p>
                <div>  Salary: {salary}</div>
                <div> Equity: {equity} </div>
                <button onClick={Apply} disabled={alreadyApplied}>
                    Apply
                </button>
            </div>
        </div>
    )

} 

export default JobCard;