import HelloWorld from "./HelloWorld";

function App() {
  const name = "Varsha";
  const hour = new Date().getHours();

  const greet = () => {
    if (hour < 12) return "Good Morning";
    else if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      {/* Task 26 output */}
      <HelloWorld />

      {/* Task 27 - JSX dynamic greetings */}
      <h2>{greet()}, {name}!</h2>
      <p>Welcome to Week 11 React learning.</p>

      <hr />

      {/* JSX expressions */}
      <h3>JSX Expressions Demo:</h3>
      <p>2 + 2 = {2 + 2}</p>
      <p>Random Number: {Math.floor(Math.random() * 100)}</p>
    </div>
  );
}

export default App;
