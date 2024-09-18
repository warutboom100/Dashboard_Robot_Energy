import React from 'react'
import SearchBox from '../../components/Searchbox/Searchbox';

export const Header_Dashboard = () => {
  return (
    <div className="d-flex justify-content-between align-items-center">
        <div>
          <h1 className="dashboard-title">Hi, Warut</h1>
          <p className="dashboard-text">
            Let's take a look at your robots today.
          </p>
        </div>
        <div className='d-flex'>
          <SearchBox/>
          <button 
            type="button" 
            className="btn btn-primary" 
            style={{
              borderRadius: "30px", 
              width: "120px", 
              fontSize: "12px", 
              marginLeft: "10px", 
              backgroundColor: "#23262c", 
              border: "2px solid #23262c", // Match border color with background
              color: "#fff" // Set text color for better readability
            }}>
            Demo version
          </button>
        </div>
        
      </div>
  )
}
