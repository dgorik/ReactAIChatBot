import { createChatBotMessage } from "react-chatbot-kit";

const config = {
    botName: 'Card Advisor',
    initial: [
        createChatBotMessage("Hello I'm a credit card advisor, how can I help you?")
    ]
}

export default config