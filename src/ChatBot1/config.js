import { createChatBotMessage } from "react-chatbot-kit";
import { useState } from "react";
import Dropdown from "@/app/Dropdown";
import { LanguageState } from "../app/LanguageContext";


export const Config = (language) => {

  console.log("Selected Language:", language);

  const language_translation = {
    "EN": "Hi, my name is Buddy, how can I help you?",
    "ZH": "你好，我的名字是Buddy，我能帮你什么？",
    "ES": "Hola, mi nombre es Buddy, ¿cómo puedo ayudarte?",
    "AR": "مرحبًا، اسمي Buddy، كيف يمكنني مساعدتك؟",
    "HI": "नमस्ते, मेरा नाम Buddy है, मैं आपकी कैसे मदद कर सकता हूँ?"
  }

  const language_selected = () => {
    return language_translation[language];
  }; 

  return {
    botName: 'Advisor',
    initialMessages: [
        createChatBotMessage(`${language_selected()}`)
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
}

export default Config