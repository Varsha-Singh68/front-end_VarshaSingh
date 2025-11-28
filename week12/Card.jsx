import React from "react";

function Card({ image, title, description }) {
  return (
    <div style={{
      width: "260px",
      background: "#fff",
      padding: "15px",
      borderRadius: "10px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
      textAlign: "center",
      margin: "15px"
    }}>
      <img 
        src={image} 
        alt={title} 
        style={{ width: "100%", borderRadius: "8px" }} 
      />
      <h3 style={{ marginTop: "10px" }}>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Card;
