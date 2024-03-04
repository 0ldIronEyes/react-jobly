import React, {useState} from "react";

//generic search form for showing search fields
function SearchForm( {search, placeholder} )
{
    const [entry, setEntry] = useState("");

    function submit(evt)
    {
        evt.preventDefault();
        search(entry);
        setEntry(entry);
    }

    function handleChange(evt){
        setEntry(evt.target.value);
    }

    return(
        <div className="m-4">
            <form className="form-inline" onSubmit={submit}>
                <input className="form-control form-control-lg" name="entry" placeholder={placeholder} onChange= {handleChange} value={entry}/>
            <button className="btn btn-md btn-primary" type="submit"> Submit </button>
            </form>
        </div>
    )
}

export default SearchForm;
