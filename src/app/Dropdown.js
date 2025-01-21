import React from "react";
import { useState } from "react";
import "./public/Dropdown.css"

const Dropdown = ({ language, setLanguage }) => {
    return (
        <div>
            <h2> "We are going to drop here" </h2>
            <select className="dropdown-button"
                value={language}
                onChange = {(e) => setLanguage (e.target.value)}
            >
                <option value={'EN'} >English</option>
                <option value={'ZH'}>Spanish</option>
                <option value={'EN'}>Chinese</option>
                <option value={'HI'}>Hindi</option>
                <option value={'AR'}>Arabic</option>
            </select>
        </div>  
    )
}

export default Dropdown