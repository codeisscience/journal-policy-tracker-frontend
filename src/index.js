import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Nav from "./components/Nav";

function App() {
  return (
    <Nav />
    // <div className="App" class="p-6 items-center justify-center">
    //   <h1 class="text-blue-400 font-extrabold">Code is Science!</h1>
    //   <p class="tracking-widest">Tailwind CSS.</p>
    // </div>
  );
}

ReactDOM.render(<App />, document.querySelector("#root"));
