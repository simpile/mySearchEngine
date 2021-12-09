import React, { useState } from "react";


export default function YoutubeSearchBar({ onFormSubmit }) {
    const [term, setTerm] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        onFormSubmit(term);
    }

    return (
        <div className="ui segment ">
            <form
                onSubmit={onSubmit}
                className=" ui form">
                <div className="field">
                    <label htmlFor="myInput">Youtube Search</label>
                    <input
                        name="myInput"
                        type="text"
                        value={term}
                        onChange={(e)=>  setTerm(e.target.value) }
                    />
                </div>
            </form>
        </div>
    )
}



