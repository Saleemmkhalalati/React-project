
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  YAxis,
  

} from "recharts";
import Typography from "../../../utilities/Typography";



const divStyle = {
  color: 'white',
  background:'red !important'
};
const containerStyle = {
  backgroundColor: ' #C4C4C4',
  color:'white',
  width:'150px',
  padding:'5px',
  borderRadius: '10px',
  // padding: '20px',
};




export default function Chart({ title, data, dataKey, grid,dec,yuserData }) {

  return (
    <div className="chart  w-[100%]  lg:w-[100%] xl:w-[77%] sm:w-[100%]  py-[4rem] pe-3 flex  flex-wrap items-center   xl:justify-between gap-5  text-center  bg-white rounded-md relative xl:bottom-44 ">
  <div className=" xl:w-[70%] md:w-[100%] w-full  ">
  <ResponsiveContainer width="100%"  height="100%"aspect={4 / 1} >
        <LineChart data={data} width={400} height={500}>
          <XAxis dataKey="name" stroke="#7B7B7B" />
          {/* <YAxis stroke="#7B7B7B"  /> */}
          <YAxis axisLine={false} tickLine={false}  />
          

          <defs>
                    <linearGradient
                        id="linear"
                        x1="84"
                        y1="5"
                        x2="84.1"
                        y2="470"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop offset="5%" stopColor="#2BC2F7" />
                        <stop offset="40%" stopColor="#5A81FD" />
                    </linearGradient>
                </defs>
          <Line type="monotone" dataKey={dataKey}   stroke="url(#linear)" strokeWidth={4} />
         



          <Tooltip separator="," offset={10}   contentStyle={containerStyle} labelStyle={divStyle}/>
          {grid && <CartesianGrid strokeDasharray="5 5" horizontal={true} vertical ={false} />}
        </LineChart>
      </ResponsiveContainer>
  </div>
      <div className="xl:w-[25%] md:w-[100%]   ">
      <Typography component="h3" className='font-bold text-[20px] text-myGray-500 leading-[25.14px] mb-3'>{title}</Typography>
      <Typography component="p"  className='text-myGray-500  opacity-50'>{dec}</Typography>
      </div>

    </div>
  );
}