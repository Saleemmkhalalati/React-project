export default function Radio({  value, onChange,name,items, })
 {
    return (

       
     <>
     {items.map((item) => {
    return (
        <div key={item.value} className=" flex items-center gap-1"> 
        <input type="radio"
        name={name}
        value={item.value}
        id={name + item.value}
        checked={value=== item.value}
        onChange={e => onChange(e.target.value)}
        className="cursor-pointer"
        />
        <label htmlFor={name + item.value} className=" text-[13px] font-normal text-myGray-500 leading-[20px] cursor-pointer">{item.label}</label>

        </div>
    )
       
     }
     )}
     </>
          
  



       
      );

}
import PropTypes from "prop-types";
Radio.propTypes = {
    name: PropTypes.string,
    items:PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
};