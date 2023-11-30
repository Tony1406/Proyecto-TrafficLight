import React from "react";
import ReactDOM from "react-dom";
import "../styles/index.css";
import TrafficLight from "./component/TrafficLight";


function App() {
    return(
        <TrafficLight />

    );
}

ReactDOM.render(<App />, document.querySelector("#app"))
