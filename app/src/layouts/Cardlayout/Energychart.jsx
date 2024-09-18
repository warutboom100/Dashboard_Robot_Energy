import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import chartData from '../../others/sample_chartdata';

export const Energychart = () => {
  return (
<div className="card robot-card" style={{ borderRadius: "30px" }}>
      <div className='p-3'>
        <div className='d-flex justify-content-between'>
          <div>
            <h5 className="card-title">Energy Consumption</h5>
          </div>
          <div className="ms-2 d-flex align-items-center">
            {/* Additional content could go here */}
          </div>
        </div>
        <div className="card-body">
          Power (Watt)
          <ResponsiveContainer height={250} width="100%">
            <AreaChart
          width={500}
          height={400}
          data={chartData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          {/* <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" /> */}
          <Area type="monotone" dataKey="Original" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="Optimize" stackId="1" stroke="#ffc658" fill="#ffc658" />
        </AreaChart>
          </ResponsiveContainer>
            
               
          
         
          
        </div>
      </div>
    </div>
  );
};
