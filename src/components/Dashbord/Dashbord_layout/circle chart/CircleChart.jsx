
import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell,  RadialBar, RadialBarChart } from 'recharts';
import {dataCircel} from "../../Report/ReportData"

const CircleChart = () => {
   
      const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

      const gradientColors = [
        { color: '#2BC2F7', opacity: 1 },
        { color: '#5A81FD', opacity: 0.2 },
      
        // Add more gradient colors with opacity as needed
      ];
    
      const calculateGradient = () => {
        const totalColors = gradientColors.length;
        const colorStep = 1 / (totalColors - 1);
    
        return dataCircel.map((entry, index) => {
          const colorIndex = index % totalColors;
          const color = gradientColors[colorIndex];
          const opacity = 1 - colorStep * colorIndex;
    
          return (
            <Cell
              key={index}
              fill={color.color}
              fillOpacity={opacity}
            />
          );
        });
      };


  return (
    <div className='w-[20%] bg-white px-2  py-2 flex  flex-col justify-center items-center rounded-md'>
        <h2>All Users - 100.000</h2>
    <PieChart width={200}  height={250} margin={{top: 0, right: 0, bottom: 0, left: 10}} className=' '
    >
      <Pie
        data={dataCircel}
        cx={90}
        cy={100}
        innerRadius={40}
        outerRadius={80}
        fill="red"
        paddingAngle={5}
        dataKey="value"
      >
        {/* {dataCircel.map((entry, index) => (
          // <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          <Cell
          key={index}
          fill={`url(#color-${index})`}
        />
        ))} */}
              {calculateGradient()}
      </Pie>
 

  
    </PieChart>
    <div className='flex flex-col gap-1'>
        <div><span></span> <span>62% Patient Users </span></div>
        <div><span></span> <span>62% Patient Users </span></div>
        <div><span></span> <span>62% Patient Users </span></div>
        
    </div>
   
   </div>
  )
}

export default CircleChart

