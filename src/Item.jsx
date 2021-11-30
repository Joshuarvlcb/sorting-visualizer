import React from "react";

const Item = ({ height }) => {
  //pass in here if it is a i j or done
  return (
    <div id={height} style={{ height: height + "%" }} className="item"></div>
  );
};

export default Item;
