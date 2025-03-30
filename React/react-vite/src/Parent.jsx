import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [message, setMessage] = useState("");

  // Function to receive data from child
  const handleChildData = (data) => {
    setMessage(data);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Message from Child: {message}</p>
      <Child sendDataToParent={handleChildData} />
    </div>
  );
};

export default Parent;
