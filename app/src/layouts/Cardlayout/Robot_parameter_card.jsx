import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'time1', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'time2', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'time3', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'time4', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'time5', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'time6', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'time7', uv: 3490, pv: 4300, amt: 2100 },
];

export const Robot_parameter_card = () => {
  return (
    <div className="card text-bg-dark robot-card" style={{ borderRadius: "30px" }}>
      <div className='p-3'>
        <div className='d-flex justify-content-between'>
          <div>
            <h5 className="card-title">Robot Parameter</h5>
          </div>
          <div className="ms-2 d-flex align-items-center">
            {/* Additional content could go here */}
          </div>
        </div>
        <div className="card-body">
          <div className='row'>
            <div className='col'>
                Velocity
                <ResponsiveContainer height={250} width="100%">
            <LineChart data={data} margin={{ right: 25, top: 10 }}>
              {/* <CartesianGrid strokeDasharray="3 3" /> */}
              <XAxis dataKey="name" />
              <YAxis interval="preserveStartEnd" />
              <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
            </div>
            <div className='col'>
                Acceleration
                <ResponsiveContainer height={250} width="100%">
                    <LineChart data={data} margin={{ right: 25, top: 10 }}>
                    {/* <CartesianGrid strokeDasharray="3 3" /> */}
                    <XAxis dataKey="name" interval="preserveStartEnd" />
                    <YAxis interval="preserveStartEnd" />
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};
