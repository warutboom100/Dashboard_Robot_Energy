import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getImageUrl } from "../../utils";
import './Navbar.css';
import { sidebarItems } from './navbarData';

export const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0); 

  const handleClick = (index) => {
    setActiveIndex(index);
  };
  const firstGroup = sidebarItems.slice(0, 4);
  const secondGroup = sidebarItems.slice(4);

  return (
    <nav>
      <div className='sidebar-top'>
          {/* <span class="shrink-btn">
            <i class='bx bx-chevron-left'>sss</i>
          </span> */}
          <img src={getImageUrl("icon/robot.png")} className="logo" alt=""></img>
          <div className="" style={{fontWeight:"Bold",fontSize:"12px"}}>HVAC@FIBO</div>
      </div>

      <div className="sidebar-links mt-3">
        <ul>
          <div className="active-tab"></div>
          {firstGroup.map(item => (
            <li className="tooltip-element" data-tooltip={item.index} key={item.index}>
              <Link
                to={item.path}
                className={activeIndex === item.index ? 'active' : ''}
                onClick={() => handleClick(item.index)}
              >
                <div className="icon">
                  <img src={getImageUrl(item.src)} alt={item.alt} />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="sidebar-links mt-4">
        <ul>
          <div className="active-tab"></div>
          {secondGroup.map(item => (
            <li className="tooltip-element" data-tooltip={item.index} key={item.index}>
              <Link
                to={item.path}
                className={activeIndex === item.index ? 'active' : ''}
                onClick={() => handleClick(item.index)}
              >
                <div className="icon">
                  <img src={getImageUrl(item.src)} alt={item.alt} />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="sidebar-links" style={{marginTop:'16vw'}}>
        
          <a href="#logout" >
            <div className="icon">
                <img src={getImageUrl("icon/logout.png")} alt="preferences icon"></img>
              </div>
          </a>
          <a>
            <div
            className="rounded-circle d-flex justify-content-center align-items-center text-uppercase"
            style={{
              width: '80%',
              height: '80%',
              backgroundColor: "#000000FF",
              color: "#FFFFFF",
              fontSize: '12px',
              fontWeight: 'bold',
            }}
          >
            {"w"}{"w"}
          </div>

          </a>
          
          
        
      </div>

      
      
      
    </nav>
    
  )
}
