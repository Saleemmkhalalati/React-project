import { useState } from "react";
import Typography from "../../../utilities/Typography";


import {Add, Export_icon,Refresh} from "../../../utilities/Icons"

const Content = ({
  children,
  path,
  classNameChildern,
  hasExport,
  hasRefrech,
  hasAddProducts,
  hasAddServices,
  addProductFun
}) => {
  const [Remostartactive, setRemostartActive] = useState(false);
  const [refrech, setrefrech] = useState(false);
  const [Export, setexport] = useState(false);
  const [AddProduct, setAddProduct] = useState(false);
  const [AddService, setAddService] = useState(false);


  const RefrechFun = () => {
    setrefrech(!refrech);
  };
  const ExportFunc = () => {
    setexport(!Export);
  };
  return (
    <div className="ltr:ps-1 rtl:pe-1 ltr:sm:px-5 rtl:sm:px-5 py-4 flex flex-col justify-between      ">
      <div className="flex justify-between  flex-wrap gap-2">
        <p className="text-[16px] font-normal text-myGray-600">
          <span className="text-secondary">Dashboard /</span> {path}
        </p>
        <div className="flex items-center gap-4 cursor-pointer mb-4  ">
          {hasRefrech ? (
            <div className="flex gap-1 " onClick={RefrechFun}>
        <Refresh active={refrech}/>
              <span
                className={`font-normal text-[13px] leading-[20px] text-myGray-500 hover:text-primary ${
                  refrech ? "text-primary" : ""
                }`}
              >
                Refresh
              </span>
            </div>
          ) : (
            ""
          )}

          {hasExport ? (
            <div className="flex gap-1 items-center " onClick={ExportFunc}>
              <Export_icon active={Export} />
              <span
                className={`font-normal text-[13px] leading-[20px] text-myGray-500 hover:text-primary ${
                  Export ? "text-primary" : ""
                }`}
              >
                Export Table
              </span>
            </div>
          ) : (
            ""
          )}


          
{hasAddProducts ? (
            <div className="flex gap-1 items-center " onClick={() => {
              setAddProduct(!AddProduct);
              addProductFun()
            }
            }>
              <Add  active={AddProduct} />

              <span
                className={`font-normal text-[13px] leading-[20px] text-myGray-500 hover:text-primary ${
                  AddProduct ? "text-primary" : ""
                }`}
              >
               Add Product
              </span>
            </div>
          ) : (
            ""
          )}



          {hasAddServices ? (
            <div className="flex gap-1 items-center " onClick={() => {
              setAddService(!AddService);
              addProductFun()
            }
            }>
              <Add  active={AddService} />

              <span
                className={`font-normal text-[13px] leading-[20px] text-myGray-500 hover:text-primary ${
                  AddService ? "text-primary" : ""
                }`}
              >
               Add Service
              </span>
            </div>
          ) : (
            ""
          )}
        
        </div>
      </div>


      <div
        className={`${
          classNameChildern ? classNameChildern : ""
        }  h-scree     `}
      >
        {children}
      </div>
      <Typography className={"mt-3"} component={"h5"}>
        Copyright @ 2023, All Right Resaved By{" "}
        <span
          className={`text-primary hover:text-success cursor-pointer  ${
            Remostartactive ? "text-success" : ""
          }`}
          onClick={() => {
            setRemostartActive(!Remostartactive);
          }}
        >
          Remostart
        </span>{" "}
      </Typography>
    </div>
  );
};

export default Content;
