'use client'
import React from "react";
import  "./public/Dropdown.css"
import { LanguageState } from "./LanguageContext";

const Dropdown = () => {
    const {language, setLanguage} = LanguageState()

    return (
        <div className="dropdown-container">
            <h2> Language</h2>
            <select className="dropdown-button"
                value={language}
                onChange = {(e) => setLanguage (e.target.value)}
            >
                <option value={'EN'} >English</option>
                <option value={'ES'}>Spanish</option>
                <option value={'ZH'}>Chinese</option>
                <option value={'HI'}>Hindi</option>
                <option value={'AR'}>Arabic</option>
            </select>
        </div>  
    )
}

export default Dropdown