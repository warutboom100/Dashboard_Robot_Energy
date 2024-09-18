import React from 'react'
import { getImageUrl } from "../../utils";
export const Chatbot_Head = () => {
  return (
    <div className="d-flex align-items-center justify-content-center">
        <img src={getImageUrl("icon/bot.png")} className="logo me-2" alt="" style={{width:"48px"}}/>
        <h2 className='my-2'>ChatBot@FIBO</h2>
    </div>

  )
}
