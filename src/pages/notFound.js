import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          textAlign: "center",
        }}
      >
        <h1>404</h1>
        <Link to="/">Back to Home</Link>
      </div>
    </div>
  );
};

export default NotFound;