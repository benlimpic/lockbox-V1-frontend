import React from "react";
import SubmitMatrix from "../components/Display/Create/Create/submitMatrix";

export const Create = (props) => {
  return (
    <div>
      <SubmitMatrix user={props.user}/>
    </div>
  );
};

export default Create;
