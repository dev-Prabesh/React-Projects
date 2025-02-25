import React from "react";
import Heading from "./Heading";
import TodoContainer from "./TodoContainer";

const Container = () => {
  return (
    <center>
      <div className="rounded-lg min-h-7 mt-55 w-[400px] border-2 border-black">
        <Heading />
        <TodoContainer />
      </div>
    </center>
  );
};

export default Container;
