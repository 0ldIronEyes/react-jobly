import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import JoblyApi from "../api.js";


// show detailed info about company
// routed at /companies/:handle
function CompanyDetail() {

    const { handle } = useParams();

    const [company, setCompany] = useState(null);

    useEffect(function getCompanyAndJobs() {
        async function getCompany()
        {
            setCompany(await JoblyApi.getCompany(handle));
        }
        getCompany();
    }, [handle]);

    if (company)
    {
        return (
            <div className="col-md-8">
                <h3> {company.name} </h3>
                <div>
                    <p> {company.description}</p>
                </div>
                {company.jobs.map(job => (
                    <div>
                        <JobCard  key={job.id}  id={job.id} title={job.title}  salary={job.salary}
                        equity={job.equity}  companyName={job.companyName}/>
                  </div>
                ))}
            </div>
        )
    }
}

export default CompanyDetail