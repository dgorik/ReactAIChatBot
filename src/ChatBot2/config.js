import { createChatBotMessage } from "react-chatbot-kit";

const config = {
    botName: 'Advisor',
    initialMessages: [
        createChatBotMessage("Hello I'm an expert of confectionary market in the US?")
    ],
    customStyles: {
        botMessageBox: {
          backgroundColor: '#376B7E',
        },
        chatButton: {
          backgroundColor: '#5ccc9d',
        },
    }
}

export default config