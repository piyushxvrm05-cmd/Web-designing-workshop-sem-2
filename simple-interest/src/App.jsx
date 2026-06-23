import { useState } from "react";

function App() {

  const [principal, setPrincipal] = useState("");
  const [rate, setRate] = useState("");
  const [time, setTime] = useState("");
  const [si, setSi] = useState("");

  function calculateSI() {
    let interest = (principal * rate * time) / 100;
    setSi(interest);
  }

  return (
    <div>
      <h1>Simple Interest Calculator</h1>

      <input
        type="number"
        placeholder="Enter Principal"
        onChange={(e) => setPrincipal(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Enter Rate"
        onChange={(e) => setRate(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Enter Time"
        onChange={(e) => setTime(e.target.value)}
      />

      <br /><br />

      <button onClick={calculateSI}>
        Calculate
      </button>

      <h2>Simple Interest = {si}</h2>

    </div>
  );
}

export default App;