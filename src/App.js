import { useState } from "react";
import "./App.css";
import NumPad from "./NumPad";
function App() {
  let [ip, setIP] = useState("");
  let [answer, setAnswer] = useState("");
  function addEle(value) {
    setIP((v) => v + value);
  }
  function handleEquals() {
    // eslint-disable-next-line
    setAnswer(eval(ip));
  }

  return (
    <div className="fullApp">
      <h1>React Calculator</h1>
      <input type="text" value={ip} onChange={(e) => setIP(e.target.value)} />
      <div>{answer}</div>
      <NumPad
        addEle={addEle}
        handleEquals={handleEquals}
        setIP={setIP}
        setAnswer={setAnswer}
        ip={ip}
      />
    </div>
  );
}

export default App;
