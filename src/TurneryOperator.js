import { useState } from "react";

function TurneryOperator() {
   
  const [saurabh, setSaurabh] = useState(1);
  const [sanchit, setSanchit] = useState(2);
  
  const [koinahi, koiNahi] = useState(3);
  
 

  return (
    <div>
      <h3> Condiction If | else. </h3> 

      {/* where - > ? if 
      where : - else 
      
      */}

      {saurabh == 1 ? (
        <span>Saurabh</span>
      ) : sanchit == 2 ? (
        <span>Sanchit</span>
      ) : (
        <span>koi nahi</span>
      )}
    </div>
  );
}

export default TurneryOperator;

// testing just chnage useState value 5 , 6 and o/t will differ.
