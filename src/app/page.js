'use client'
import ChatComponent1 from "../ChatBot1/Components/ChatComponent1";
import ChatComponent2 from "../ChatBot2/Components/ChatComponent2";
import Header from "./Header"
import Footer from "./Footer"
import styles from "./public/Page.module.css";


export default function Home() {
  return (
    <div className={styles.container}>
        <Header/>
        <div className={styles.chatBots}>
          <ChatComponent1 />
          {/* <ChatComponent2 /> */}
        </div>
        <Footer/>
    </div>

  );
}