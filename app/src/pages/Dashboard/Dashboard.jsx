import React from 'react';
import './Dashboard.css';
import { getImageUrl } from "../../utils";
import { Header_Dashboard } from '../../layouts/Header/Header';
import { Robot_card } from '../../layouts/Cardlayout/Robot_card';
import { Energyresult_card } from '../../layouts/Cardlayout/Energyresult_card';
import { Energychart } from '../../layouts/Cardlayout/Energychart';
import { Parameter_card } from '../../layouts/Cardlayout/Parameter_card';
import { Robot_parameter_card } from '../../layouts/Cardlayout/Robot_parameter_card';

export const Dashboard = () => {
  return (
    <div className='container-fluid'>
      <Header_Dashboard/>
      <section className='mt-3'>
        <div className="row">
          
          <div className="col-lg-3 col-md-6 col-sm-12 mb-3">
            <Parameter_card/>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mb-3">
            <Energyresult_card/>
          </div>
          
          <div className="col-lg-5 col-md-12 mb-3">
            <Robot_card/>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-lg-5 col-md-12 mb-3">
           <Robot_parameter_card/>
           {/* <Robot_card/> */}
          </div>
          <div className="col-lg-7 col-md-12 mb-3">
            <Energychart/>
          </div>
        </div>
      </section>
    </div>
  );
};
