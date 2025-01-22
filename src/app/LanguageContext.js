"use client"

import React, { useContext, useState, useEffect, createContext} from 'react'

const Language = createContext();

const LanguageContext = ({ children }) => {
    const [language, setLanguage] = useState("EN"); // Default language
  
    return (
      <Language.Provider value={{ language, setLanguage }}>
        {children}
      </Language.Provider>
    );
};

export default LanguageContext

export const LanguageState = () => {
    return useContext(Language) 
}

