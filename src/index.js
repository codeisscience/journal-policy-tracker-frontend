import React from "react";
import ReactDOM from "react-dom";
import "./tailwind.output.css";

function App() {
  return (
    <div className="App" class="p-6 items-center justify-center">
      <h1 class="text-blue-400 font-extrabold">Code is Science!</h1>
      <p class="tracking-widest">Tailwind CSS.</p>
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
