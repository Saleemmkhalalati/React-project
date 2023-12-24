import React, { PureComponent } from "react";



import {
  PieChart,
  Pie,
  Sector,
  Cell,
  RadialBar,
  RadialBarChart,
} from "recharts";
import { dataCircel } from "../../Admin_Dashboard/Report/ReportData";
import Typography from "../../../utilities/Typography";
import { color } from "framer-motion";

const CircleChart = ({ title }) => {
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const gradientColors = [
    { color: "#2BC2F7", opacity:1 },
    { color: "#5A81FD", opacity: 0.5 },
    {color:"#2bc1f778",opacity: .7}

    // Add more gradient colors with opacity as needed
  ];
  

  const getCell = () => {
    const totalColors = gradientColors.length;
    return dataCircel.map((entry, index) => {
      const colorIndex = index % totalColors;
      const color = gradientColors[colorIndex];
      return <Cell key={index} fill="url(#colorUv)" fillOpacity={color.opacity} />;

    });
  };

  return (
    <div className="w-[13rem] bg-white px-2  py-2 pt-10 flex  flex-col justify-center items-center rounded-md">
      <Typography component="h3">{title}</Typography>
      <PieChart
        width={200}
        height={250}
        margin={{ top: 0, right: 0, bottom: 0, left: 10 }}
        className=" "
      >
        <defs>
      <linearGradient id="colorUv" x1="1" y1="1" x2="0" y2="0">
        <stop offset="30%" stopColor="#2BC2F7"  />
        <stop offset="95%" stopColor= "#5A81FD" />
      </linearGradient>
    </defs>

        <Pie
          data={dataCircel}
          cx={90}
          cy={100}
          innerRadius={40}
          outerRadius={80}
          
          paddingAngle={5}
          dataKey="value"
        >
        
          {getCell()}
        </Pie>
      </PieChart>
      <div className="flex flex-col gap-1">
        {gradientColors.map((color,i) => {
          return(
            <div>
            <span className={` px-[12px] mr-1 rounded-sm bg-gradient-to-r from-primary to-secondary `} style={{opacity:`${color.opacity}`}}></span> <span>62% Patient Users </span>
          </div>
          )
        }
        )}
   
      </div>
    </div>
  );
};

export default CircleChart;
