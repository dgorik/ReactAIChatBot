'use client'
import React from "react";
import ChatComponent1 from "../ChatBot1/Components/ChatComponent1";
import Header from "./Header"
import Footer from "./Footer"
import styles from "./public/Page.module.css"


export default function Home() {
  return (
    <div className={styles.main_page}>
       <Header/>
       <ChatComponent1 />
       <Footer/>
    </div>
  );
}