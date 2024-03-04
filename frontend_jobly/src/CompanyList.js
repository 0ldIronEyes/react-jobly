import React, {useState, useEffect } from "react";
import SearchForm from "./SearchForm";
import CompanyCard from "./CompanyCard";

//shows list of companies, displays list of companyCards
// routed at /companies/
function CompanyList() {
    const [companies, setCompanies] = useState(null);

    useEffect(function getCompanies()
    {
        search();
    }, []);

    async function search(company)
    {
        let results = await JoblyApi.getCompanies(company);
        setCompanies(results);
    }

    return (
        <div className="col-md-8"> 
            <SearchForm searchFn={search} placeholder={"Enter company name..."} />
            <div>
                {companies.map(com=> (<CompanyCard company= {com}></CompanyCard>))}
            </div>
        </div>
    )
}

export default CompanyList;