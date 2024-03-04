import React from "react";
import { Link } from "react-router-dom";
import "style.css"


//show basic company info
function CompanyCard({ company }) {
  return (
      <Link className= "CompanyCard" to={`/companies/${company.handle}`}>
        <div className="m-4">
          <h6>
            {company.name}
            {company.logoUrl && <img src={company.logoUrl} alt={company.name}/>}
          </h6>
          <div>{company.description}</div>
        </div>
      </Link>
  );
}

export default CompanyCard;
