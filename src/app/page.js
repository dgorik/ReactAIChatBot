'use client'
import ChatComponent1 from "../ChatBot1/Components/ChatComponent1";
import ChatComponent2 from "../ChatBot2/Components/ChatComponent2";
import "../ChatBot1/global.css";


export default function Home() {
  return (
    <div >
        <ChatComponent1 />
        <ChatComponent2 />
    </div>

  );
}