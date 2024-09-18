import React from 'react';
import { getImageUrl } from '../../utils'; // Ensure you import getImageUrl correctly
import './Energyresult_card.css';

export const Energyresult_card = () => {
  return (
    <div className="card " style={{ borderRadius: "30px", borderColor: "#6D64585B", backgroundColor: "#61584B5B"}}>
      <div className='p-3'>
        <div className="card-title d-flex justify-content-between align-items-center">
          <div style={{ fontSize: '1.25rem', fontWeight: '600' }}>
            Your Robot <br /> Energy for Today
          </div>
          <button 
            type="button" 
            className="btn btn-primary" 
            style={{
              borderRadius: "50%", 
              width: "40px", 
              height: "40px",
              fontSize: "12px", 
              backgroundColor: "#23262c", 
              border: "2px solid #23262c", 
              color: "#fff", 
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 0 
            }}
          >
            <img src={getImageUrl("icon/calendar.png")} alt="Logout icon" style={{ width: '20px', height: '20px' }} />
          </button>
        </div>
        <div className="card-body" style={{ fontSize: '1rem', color: '#333', height:"h-100"} }>
          <div className='row'>
            
            <div className='col-4 align-content-end'>
                <img className="mb-4" src={getImageUrl("icon/voltage.png")} alt="Logout icon" />
                <div className='mt-2'>
                  <span className="badge" style={{backgroundColor:"#fdcb22",width:"3.6vw",borderRadius:"30px"}}>&nbsp;</span>
                  <span style={{marginLeft: '10px',fontSize:"12px"}}>Original</span>
                </div>
                <div className='mt-2'>
                  <span className="badge" style={{backgroundColor:"#ff4e35",width:"3.6vw",borderRadius:"30px"}}>&nbsp;</span>
                  <span style={{marginLeft: '10px',fontSize:"12px"}}>Optimize</span>
                </div>
                <div className='mt-2'>
                  <span className="badge" style={{backgroundColor:"#23262c",width:"3.6vw",borderRadius:"30px"}}>&nbsp;</span>
                  <span style={{marginLeft: '10px',fontSize:"12px"}}>Activity time</span>
                </div>
            </div>
            <div className='col-8'>
                    <div className="wrap">
                <div className="blobwrap text-center" >
                    <div className="blob blob_1" style={{width:"160px",height:"160px",color:"#23262c",fontSize:"1.5rem"}}>
                        <span>2,100<br/>watt</span>
                    </div>
                    <div className="blob blob_2" style={{width:"100px",height:"100px",color:"#23262c",fontSize:"1.5rem"}}>
                        <span>320<br/>watt</span>
                    </div>
                    <div className="blob blob_3" style={{width:"60px",height:"60px",color:"#FFFFFFFF",fontSize:"0.8rem"}}>
                        <span>2.30<br/>hours</span>
                    </div>
                </div>
            </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};
