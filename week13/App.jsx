import { Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>

      {/* Navigation Bar */}
      <nav style={{
        marginBottom: "25px",
        display: "flex",
        gap: "20px",
        background: "#eee",
        padding: "10px 15px",
        borderRadius: "8px"
      }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>

    </div>
  );
}

export default App;
