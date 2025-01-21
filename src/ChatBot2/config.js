import { createChatBotMessage } from "react-chatbot-kit";

const config = {
    botName: 'Advisor',
    initialMessages: [
        createChatBotMessage("Hello, please type something to left so I can talk to my brother")
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