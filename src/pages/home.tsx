import React from "react";

// const home = async () => (
//   <div> 
//     <h1 id="font1"> CJ is Cool </h1>
//     <p id="font2"> Liam is too </p>
//   </div>
// )

const home = async () => {
  // you can use await here to wait for any asynchronous operations
  return (
    <div>
      <h1 id="font1"> CJ is Cool </h1>
      <p id="font2"> Liam is too </p>
    </div>
  );
};

export default home;