import React from "react";

const Footer = () => {
  const date = new Date();
  return (
    <div
      style={{
        marginTop: "30px",
        padding: "10px 0",
        backgroundColor: "#3b3b3b",
        color: "white",
        textAlign: "center",
      }}
    >
      <div className="container">
        <p>Copyright. &copy; {date.getFullYear()} </p>
      </div>
    </div>
  );
};

export default Footer;