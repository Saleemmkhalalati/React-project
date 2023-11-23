
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  YAxis,
  

} from "recharts";



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
    <div className="chart  py-[4rem] px- flex items-center gap-12 w-[75%] justify-between bg-white rounded-md relative bottom-36">
      <ResponsiveContainer width="100%" aspect={4 / 1} >
        <LineChart data={data} width={400} height={400}>
          <XAxis dataKey="name" stroke="#7B7B7B" />
          <YAxis stroke="#7B7B7B" />
          

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
      <div className="w-[30%]">
      <h2 className='font-bold text-[20px] text-myGray-500 leading-[25.14px] mb-3'>{title}</h2>
      <p  className='text-myGray-500  opacity-75'>{dec}</p>
      </div>

    </div>
  );
}