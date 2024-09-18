import React, { useState } from 'react';
import { getImageUrl } from "../../utils";
import "./Robot_card.css";

const axisData = [
  { name: 'Axis 1', min: -170, max: 170, current: -45 },
  { name: 'Axis 2', min: -145, max: 90, current: 60 },
  { name: 'Axis 3', min: -125, max: 280, current: 75 },
  { name: 'Axis 4', min: -190, max: 190, current: 50 },
  { name: 'Axis 5', min: -120, max: 120, current: 30 },
  { name: 'Axis 6', min: -360, max: 360, current: 80 },
];

export const Robot_card = () => {
  const [connection, setConnection] = useState(0); 

  const handleReconnect = () => {
    setConnection(prev => (prev === 0 ? 1 : 0));
  };

  return (
    <div className="card text-bg-dark robot-card" style={{borderRadius:"30px"}}>
      <div className='p-3'>
        <div className='d-flex justify-content-between'>
          <div>
            <h5 className="card-title">Robot model MZ04-01</h5>
          </div>
          <div className="ms-2 d-flex align-items-center">
            <button 
              type="button" 
              className="btn btn-primary" 
              onClick={handleReconnect}
              style={{
                borderRadius: "30px",
                marginRight: "10px",
                width: "90px",
                fontSize: "12px",
                backgroundColor: connection === 1 ? "#27AE60" : "#ff4e35",
                border: `2px solid ${connection === 1 ? "#27AE60" : "#ff4e35"}`,
                color: "#fff"
              }}
            >
              {connection === 1 ? "Disconnect" : "Reconnect"}
            </button>
            <img 
              src={getImageUrl(connection === 1 ? "icon/signal.png" : "icon/wifi-slash.png")} 
              className="logo" 
              alt="connection status" 
              style={{ width: "32px" ,filter: connection === 1 ? "invert(41%) sepia(90%) saturate(378%) hue-rotate(75deg) brightness(94%) contrast(92%)" : "none"}} 
            />
          </div>
        </div>
        
        <div className="row g-0 align-items-center card-body">
          <div className="col-md-8 robot-image-container" style={{width:"220px"}}>
            <img src={getImageUrl("robot.png")} className="img-fluid rounded-start" alt="robot" />
          </div>
          <div className="col-md-6">
            <div className="axis-progress">
              {axisData.map((axis, index) => {
                const workingRangePercentage = ((axis.current - axis.min) / (axis.max - axis.min)) * 100;
                return (
                  <div key={index} className="axis-progress-bar mb-3">
                    <label className="axis-label">{axis.name} ({axis.min}° to {axis.max}°)</label>
                    <div className="progress axis-progress-container">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{
                          width: `${workingRangePercentage}%`,
                          backgroundColor: "#fdcb22",
                          boxShadow: "0px 0px 10px rgba(255,165,0,0.8)",
                        }}
                        aria-valuenow={axis.current}
                        aria-valuemin={axis.min}
                        aria-valuemax={axis.max}
                      >
                        {axis.current}°
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
