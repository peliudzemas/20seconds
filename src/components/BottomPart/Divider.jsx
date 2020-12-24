import React from "react";

const Divider = ({ height, width }) => {
  const styles = {
    height: height,
    width: width,
  };
  return <div className="divider" style={styles} />;
};

export default Divider;
