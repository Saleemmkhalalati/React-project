import React,{useState} from 'react'
import Chart from './Chart'
import {userData} from "./ReportData"
import {yuserData} from "./ReportData"
import CircleChart from '../../Dashbord_layout/circle chart/CircleChart'
import Table from '../../Dashbord_layout/TableLayout'


 



 

const Allusers = () => {
  const [point, setPoint] = useState(null);

  //for table drobdown
  const handlepoint = (selected) => {
    setPoint(selected);
  };

  const columns = [
    "ID",
    "Type Patient",
    "Total Number",
    "Total Active Patient",
    "Total Not Active Patient",
  
    " ",
  ];
  const rows = [
    {
    
      Type_Users :"Treatment Finished",
      Total_Number:"50.000",
      Total_Active_Users:"49.000",
      Total_Not_Active_Users:"1.000",
          d:""
    },
    {
    
      Type_Users :"Treatment Finished",
      Total_Number:"50.000",
      Total_Active_Users:"49.000",
      Total_Not_Active_Users:"1.000",
      d:""
    },
   
  ];

  const points = [
    { name: "Go to patient users ", type: "view" },
    { name: "Export this filed ", type: "view" },
  
  ];
  return (
    <>
   


   <CircleChart title="All Patient - 50.000"  />
   <Chart data={userData} yuserData={yuserData} title="All Patient - 50.000" dec="All patients for you (service providers - doctor (dental)) and in this website the users is increased. " grid dataKey="Active User" />
   <div className=' w-full   lg:w-[100%] xl:w-[77%] sm:w-[100%]  h-[80%] mt-10 rounded-md relative xl:bottom-48 bg-white '>
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
