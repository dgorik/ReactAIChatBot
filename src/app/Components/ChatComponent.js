'use client'
import Chatbot from "react-chatbot-kit"
import "react-chatbot-kit/build/main.css"
import config from "../config"

const ChatComponent = () => {
    return(
        <div>
            <Chatbot
            config = {config} />
        </div>
    )
}

export default ChatComponent