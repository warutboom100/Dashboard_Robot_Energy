import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import styles from './App.module.css';
import { Dashboard } from './pages/Dashboard/Dashboard';
import { Navbar } from './components/Navbar/Navbar';
import { Robotsetup } from './pages/Robotsetup/Robotsetup';
import { Chatbot } from './pages/Chatbot/Chatbot';
import { Network } from './pages/Network/Network';
import { Document } from './pages/Documentss/Document';
import { Setting } from './pages/Settingss/Setting';
function App() {
  

  return (
    <>
      <div className={styles.App}>
        <Navbar/>
        <main>
          <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/robotsetup" element={<Robotsetup/>} />
            <Route path="/chatbot" element={<Chatbot/>} />
            <Route path="/documents" element={<Document/>} />
            <Route path="/network" element={<Network/>} />
            <Route path="/settings" element={<Setting/>} />
          </Routes>

        </main>
      </div>
      
      
  
    </>
  )
}

export default App
