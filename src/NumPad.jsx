function NumPad({ addEle, handleEquals, setIP, setAnswer }) {
  return (
    <div
      className="numpad"
      onClick={(e) => {
        console.log(e);
        if (e.target.tagName !== "BUTTON") return;
        if (e.target.innerText === "C") {
          setIP("");
          setAnswer("");
          return;
        }
        if (e.target.innerText === "=") {
          return;
        }

        addEle(e.target.innerText);
      }}
    >
      <button>7</button>
      <button>8</button>
      <button>9</button>
      <button>+</button>
      <button>4</button>
      <button>5</button>
      <button>6</button>
      <button>-</button>
      <button>1</button>
      <button>2</button>
      <button>3</button>
      <button>*</button>
      <button>C</button>
      <button>0</button>
      <button onClick={handleEquals}>=</button>
      <button>/</button>
    </div>
  );
}

export default NumPad;
