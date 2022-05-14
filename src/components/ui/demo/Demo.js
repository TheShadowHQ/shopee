import Button from "../../shared/button/Button";
import { memo } from "react";

const Demo = (props) => {
  console.log("Demo.js");
  return (
    <div className="wrapper">
      <Button />
    </div>
  );
};

export default memo(Demo);
