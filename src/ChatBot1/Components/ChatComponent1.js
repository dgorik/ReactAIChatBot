import * as React from "react"
import  { useEffect, useState} from 'react';
import "react-chatbot-kit/build/main.css"
import  "@/app/public/Page.module.css"
import { LanguageState } from '@/app/LanguageContext';
import Chatbot from "react-chatbot-kit"
import Config from "../config"
import ActionProvider from "../ActionProvider"
import MessageParser from "../MessageParser"

const ChatComponent1 = () => {
   const {language} = LanguageState()
   const [botConfig, setBotConfig] = useState(language);;

    useEffect(() => {
        setBotConfig(Config(language));  // Update the config whenever language changes
      }, [language])

    return(
        <div className="chatui">
            <Chatbot
            config = {botConfig} key={JSON.stringify(botConfig)} 
            actionProvider = {ActionProvider}
            messageParser={MessageParser}
            />
        </div>
    )
}

export default ChatComponent1