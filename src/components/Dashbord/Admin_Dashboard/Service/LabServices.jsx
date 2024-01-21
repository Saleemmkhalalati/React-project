import Content from "../../Dashbord_layout/Content/Content";
import Radio from "../../../utilities/Radio";
import NoData from "../../Dashbord_layout/NoData/NoData";
import Table from "../../Dashbord_layout/TableLayout";
import TabsFillter from "../../../utilities/TabsFillter";
import { useState } from "react";
export default function LabServices() {
  const [refrech, setrefrech] = useState(false);
  const [Export, setexport] = useState(false);
  const [valueRadio, setValueRadio] = useState(null);
  const [point, setPoint] = useState(null);

  //for table drobdown
  const handlepoint = (selected) => {
    setPoint(selected);
  };

  const handleRefrech = () => {
    setrefrech(!refrech);
  };
  const handleExport = () => {
    setexport(!Export);
  };
  console.log(point);
  const radioItems = [
    { value: "All Services", label: "All Services" },
    { value: "Last Services", label: "Last Services" },
  ];

  const columns = [
    "ID",
    "Name",
    "Description",
    "Location",
    "price",
    "Clinic Name",
    "Status",
    "Discount",
    " ",
  ];
  const rows = [];

  const points = [
    { name: "Edit service", type: "edit" },
    { name: "View service", type: "viwe" },
    { name: "Delete service", type: "delete" },
  ];

  return (
    <>
      <Content
        path={" Services / Lab Services"}
        RefrechFun={handleRefrech}
        ExportFunc={handleExport}
        refrech={refrech}
        Export={Export}
        classNameChildern="bg-white min-h-screen"
        hasExport={true}
        hasRefrech={true}
      >
        
        <TabsFillter>
          <span className="ps-2 pe-5 py-1 border-[1px] border-solid border-myGray-100  flex items-center  justify-start rounded-lg   text-myGray-500">
            {rows.length} record
          </span>

          <Radio
            name="Services"
            items={radioItems}
            value={valueRadio}
            onChange={setValueRadio}
          />
        </TabsFillter>
        {rows.length >= 1 ? (
          <Table
            columns={columns}
            rows={rows}
            points={points}
            point={point}
            handlepoint={handlepoint}
                  className={"min-h-screen"}
          />
        ) : (
          <NoData/>
        )}
      </Content>
    </>
  );
}
