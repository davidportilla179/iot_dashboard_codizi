import React from 'react';

import '../css/Header.css';
import logo from '../assets/codizilogofull2white.png'

const Header = (props) => {
  const { state } = props;
  return (
    <>
      <header>
        <img src={logo} alt="marca personal" />
        <h1>DASHBOARD</h1>
        {/* <nav>
          <ul>
            <li><a href="#projects">DASHBOARD</a></li>
            <li><a href="#letstalk">DEVICES</a></li>
          </ul>
        </nav> */}
        <div className="actions">
          <button className={`${state ? 'stateButton__on' : 'stateButton__off'}`}>
          {state ? 'CONECTADO' : 'DESCONECTADO'}
          </button>
        </div>
      </header>
    </>
  )
}

export default Header;
