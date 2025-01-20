import * as React from "react"
import "react-chatbot-kit/build/main.css"
import Chatbot from "react-chatbot-kit"
import config from "../config"
import ActionProvider from "../ActionProvider"
import MessageParser from "../MessageParser"

const ChatComponent = () => {
    return(
        <div className="chatui">
            <Chatbot
            config = {config}
            actionProvider = {ActionProvider}
            messageParser={MessageParser}
            />
        </div>
    )
}

export default ChatComponent