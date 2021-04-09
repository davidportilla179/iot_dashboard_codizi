import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import Chart from "./components/Chart.jsx";
import Gauge from "./components/Gauge.jsx";
import Header from "./components/Header.jsx";

import './css/App.css';

function App() {
  const [pot1, setPot1] = useState([]);
  const [pot2, setPot2] = useState([]);
  const [state, setState] = useState(false);
  const socketRef = useRef();
  
  useEffect(() => {
    socketRef.current = io.connect('/');

    socketRef.current.on("mqtt", message => {
      //console.log(message);
      const { pot1, pot2 } = message
      setPot1(pot1);
      setPot2(pot2);
      setState(true);
    })
  }, []);

  return (
    <div>
      <Header state={state} />
      <div className="dashboard">
        <div className="chart">
          <Chart messages={pot1} device={'Potentiometer 1'} borderColor={'rgb(54, 162, 235)'} />
        </div>
        <div className="chart">
          <Chart messages={pot2} device={'Potentiometer 2'} borderColor={'rgb(153, 102, 255)'}/>
        </div>
        <div className="gauge">
          <h2>Temperatura</h2>
          <Gauge values={pot1} units={'°C'} />
        </div>
        <div className="gauge">
          <h2>Humidity</h2>
          <Gauge values={pot2} units={'g/m3'}/>
        </div>
      </div>
    </div>
  );
}

export default App;
