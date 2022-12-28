import { useState } from "react";
function State() {
  const saurabh = 0;
  const [data, setData] = useState(saurabh); //where data is holding the state information.

  function UpdateStateData() {
    setData(data + 1); //state updated after button//
  }

  return (
    <div>
      <h1>{data}</h1>
      <button onClick={UpdateStateData}>Update Data</button>
    </div>
  );
}

export default State;
