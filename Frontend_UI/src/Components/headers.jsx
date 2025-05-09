import React from "react";

function Header_group(props) {
  const header_option = () => {
    if (props.choice == "title") {
      return (
        <div className="w-75 d-flex align-item-center justify-content-center py-4 mx-auto my-2 dark_blue_custom text-white rounded-2 ">
          <h4 className="fs-2">{props.page_name} Data</h4>
        </div>
      );
    } else {
      return (
        <div className="w-75 d-flex align-item-center justify-content-center py-4 mx-auto my-4 dark_blue_custom text-white rounded-2 ">
          {" "}
          <h4 className="fs-2">
            {" "}
            {props.page_name} yearly summery 2000 to {new Date().getFullYear()}{" "}
          </h4>
        </div>
      );
    }
  };

  return <>{header_option()}</>;
}

export default Header_group;
