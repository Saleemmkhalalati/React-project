import React,{useState} from 'react'
import Chart from './Chart'
import {userData} from "./ReportData"
import {yuserData} from "./ReportData"
import CircleChart from '../Dashbord_layout/circle chart/CircleChart'
import Table from '../Dashbord_layout/TableLayout'


 



 

const Allusers = () => {
  const [point, setPoint] = useState(null);

  //for table drobdown
  const handlepoint = (selected) => {
    setPoint(selected);
  };

  const columns = [
    "ID",
    "Type Users",
    "Total Number",
    "Total Active Users",
    "Total Not Active Users",
  
    " ",
  ];
  const rows = [
    {
    
      Type_Users :"Service Provides",
      Total_Number:"50.000",
      Total_Active_Users:"49.000",
      Total_Not_Active_Users:"1.000",
          d:""
    },
    {
    
      Type_Users :"Service Provides",
      Total_Number:"50.000",
      Total_Active_Users:"49.000",
      Total_Not_Active_Users:"1.000",
      d:""
    },
   
  ];

  const points = [
    { name: "Go to service provides", type: "viwe" },
    { name: "Export this filed ", type: "viwe" },
  
  ];
  return (
    <>
   

   {/* <div className='flex justify-between items-center gap-3  mt-10'>
   <Chart data={userData} yuserData={yuserData} title="All Users - 100.000" dec="All users as (supper admin, admin, service provider, patient) and in this website the users is increased. " grid dataKey="Active User" />
   
    <CircleChart />
   </div>

   <div className='bg-white w-[81%] h-[80%] mt-10 rounded-md'>
   <Table
            columns={columns}
            rows={rows}
            points={points}
            point={point}
            handlepoint={handlepoint}
          />
   </div> */}
   <CircleChart />
   <Chart data={userData} yuserData={yuserData} title="All Users - 100.000" dec="All users as (supper admin, admin, service provider, patient) and in this website the users is increased. " grid dataKey="Active User" />
   <div className='bg-white w-[75%] h-[80%] mt-10 rounded-md relative bottom-32'>
   <Table
            columns={columns}
            rows={rows}
            points={points}
            point={point}
            handlepoint={handlepoint}
          />
   </div>
   </>


    
)}

export default Allusers
