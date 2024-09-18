import React from 'react';
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";
import { getImageUrl } from "../../utils";
import Data from "../../others/sample_exceldata"

export const Parameter_card = () => {
  return (
    <div className="d-flex flex-column">
      <div className="mb-4">
        <div className="card " style={{ borderRadius: "30px", backgroundColor: "#FFFFFF", borderColor: "#23262C3B", borderWidth: '1px' }}>
          <div className="card-body">
            <div className='row'>
                <div className='col justify-content-between d-flex flex-column'>
                    <div>
                        <h5 className="card-title" style={{ fontSize: '1.25rem', fontWeight: '600' }}>
                            Steps for budget
                        </h5>
                        <p className="card-text" style={{ fontSize: '0.8rem', color: "#6c757d" }}>
                            Keep your Electricity bill
                        </p>
                    </div>
                    <div className="d-flex align-items-center">
                        <h5 className="me-2" style={{ fontSize: '1rem', fontWeight: '600',paddingTop:"10px" }}>
                            Change Budget
                        </h5>
                        <button 
                            type="button" 
                            className="btn btn-primary rounded-circle p-0" 
                            style={{
                            width: "24px", 
                            height: "24px",
                            backgroundColor: "#23262c", 
                            border: "2px solid #23262c", 
                            color: "#fff", 
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                            }}
                        >
                            <img src={getImageUrl("icon/pencil.png")} alt="Change Goal icon" style={{ width: '10px', height: '10px' }} />
                        </button>
                        </div>

                </div>
                <div className='col'>
                    <CircularProgressbarWithChildren value={66} strokeWidth={5} styles={buildStyles({pathColor: "#ff4e35",})}>
                        <div style={{ fontSize: 18, marginTop: -5, opacity: "0.6" }}>
                          <strong>Cost</strong>
                        </div>
                        <div style={{ fontSize: 22, marginTop: -5 }}>
                          <strong>8,500</strong>
                        </div>
                      </CircularProgressbarWithChildren>
                </div>
            </div>
            
           
            
          </div>
        </div>
      </div>

      
      <div className="">
        <div className="card" style={{ borderRadius: "30px", backgroundColor: "#FFFFFF", border: "1px solid #23262C3B", padding: '20px' }}>
          
          <div className="card-title d-flex justify-content-between align-items-center mb-3">
            <div style={{ fontSize: '1.25rem', fontWeight: '600' }}>
              Export data
            </div>
            
            <div className='d-flex align-items-center'>
              <h5 className="me-2" style={{ fontSize: '0.8rem', color: "#6c757d", margin: '0' }}>
                09/16/2024
              </h5>
              
            </div>
          </div>
          
          {/* Now we map through the Data array */}
          {Data.map((item, index) => (
            <div className="card mb-2" key={index} style={{ borderRadius: "16px", border: "1px solid #e3e3e3" ,backgroundColor:"#f5f2ee"}}>
              <div className="card-body px-3" style={{padding:"6px"}}>
                <div className="row">
                  <div className="col-5 d-flex align-items-center">
                    <div
                      className="rounded-circle d-flex justify-content-center align-items-center text-uppercase me-3"
                      style={{
                        width: '24px', 
                        height: '24px', 
                        backgroundColor: "#000000FF", 
                        color: "#FFFFFF",
                        fontSize: '7px',
                        fontWeight: 'bold'
                      }}
                    >
                      {item.programname[0]}{item.programname[1]}
                    </div>
                    <div>
                      <div style={{ fontSize: '0.9rem', fontWeight: '600', marginBottom: 'px' }}>
                        {item.programname}
                      </div>
                      <p style={{ fontSize: '0.65rem', color: "#6c757d", marginBottom: '0' }}>
                        {"Modal : "+item.robotmodal}
                      </p>
                    </div>
                  </div>
                  
                  {/* Right Section */}
                  <div className="col-7 d-flex align-items-center justify-content-end">
                    <span style={{ fontSize: '0.8rem', fontWeight: '500' }}>
                      Session: {item.session}
                    </span>
                    <button 
                      type="button" 
                      className="btn btn-primary rounded-circle p-0 mx-2" 
                      style={{
                        width: "24px", 
                        height: "24px",
                        backgroundColor: "#FFFFFFFF", 
                        border: "2px solid #FFFFFFFF", 
                        color: "#fff", 
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      <img src={getImageUrl("icon/export.png")} alt="Change Goal icon" style={{ width: '20px', height: '20px' }} />
                    </button>
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
