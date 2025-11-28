import React from "react";
import Card from "./components/Card";


function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "20px" }}>
        Product Catalog
      </h1>

      <div style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap"
      }}>
        <Card 
          image="https://via.placeholder.com/260"
          title="Wireless Headphones"
          description="High-quality sound with noise cancellation."
        />

        <Card 
          image="https://via.placeholder.com/260"
          title="Smart Watch"
          description="Health tracking with modern features."
        />

        <Card 
          image="https://via.placeholder.com/260"
          title="Laptop Sleeve"
          description="Durable and stylish laptop protection."
        />
      </div>
    </div>
  );
}

export default App;
