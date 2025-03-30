import React from "react";

const Child = ({ sendDataToParent }) => {
  const sendData = () => {
    sendDataToParent("Hello from Child!");
  };

  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={sendData}>Send Data to Parent</button>
    </div>
  );
};

export default Child;
