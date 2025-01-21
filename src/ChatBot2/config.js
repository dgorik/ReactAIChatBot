import { createChatBotMessage } from "react-chatbot-kit";

const config = {
    botName: 'Advisor',
    initialMessages: [
        createChatBotMessage("Hello, my name is Mark")
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