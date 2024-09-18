import React from 'react'
import { Chatbot_Head } from '../../layouts/Header/Chatbot_Head';
import './Chatbot.css'
export const Chatbot = () => {
  return (
    <div className="container">
  <Chatbot_Head />
  <section className="mt-3">
    <div className="card chatbot-card shadow-lg p-3">
      
      <div className="card-body chat-window" style={{ height: '60vh', overflowY: 'scroll' }}>
        {/* ตัวอย่างข้อความสนทนาของผู้ใช้ */}
        <div className="d-flex justify-content-end mb-2">
          <div className="chat-message user-message p-2">
            <span className="text-muted">You: </span>
            <span>What is the weather today?</span>
          </div>
        </div>
        {/* ตัวอย่างข้อความสนทนาของ bot */}
        <div className="d-flex justify-content-start mb-2">
          <div className="chat-message bot-message p-2">
            <span className="text-primary">Bot: </span>
            <span>The weather today is sunny with a high of 30°C.</span>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Type your message..." />
          <button className="btn btn-primary" type="button">
            Send
          </button>
        </div>
      </div>
    </div>
  </section>
</div>


  )
}
