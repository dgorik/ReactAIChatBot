import { createChatBotMessage } from "react-chatbot-kit";

import styles from "@/app/public//ChatBot.css"

export const Config = (language) => {

  console.log("Selected Language:", language);

  const language_translation = {
    "EN": "Hi, my name is Buddy, how can I help you?",
    "ZH": "你好，我的名字是Buddy，我能帮你什么？",
    "ES": "Hola, mi nombre es Buddy, ¿cómo puedo ayudarte?",
    "AR": "مرحبًا، اسمي Buddy، كيف يمكنني مساعدتك؟",
    "HI": "नमस्ते, मेरा नाम Buddy है, मैं आपकी कैसे मदद कर सकता हूँ?"
  }

  return {
    botName: 'Advisor',
    initialMessages: [
        createChatBotMessage(language_translation[language])
    ],
    customStyles: {
        botMessageBox: {
          backgroundColor: "black",
        },
        chatButton: {
          backgroundColor: '#5ccc9d',
        },  
    }
  }
}

export default Config