import React, { useState, useEffect } from "react";
import JoblyApi from "../api.js";
import JobCard from "./JobCard.js";
import SearchForm from "./SearchForm.js";

// shows list of jobs
// routed at /jobs
function JobList() {
    const [jobs, SetJobs] = useState(null);
    
    async function search(title){
        let jobs = await JoblyApi.getJobs(title);
        SetJobs(jobs);
    }

    if(jobs.length > 0)
    {
        return (
            <div className=" col-md-8">
                <SearchForm search={search} placeholder={"Search for jobs..."} />
                {jobs.map( j => (
                    <JobCard key={j.id} id={j.id} title={j.title} salary={j.salary}
                    equity={j.equity} companyName={j.companyName} />
                ))}
            </div>
        )
    }
    else
    {
        return (<div>
            No jobs found;
        </div>);    
    }
    
};

export default JobList;