import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../assets/Welcome.css';

const WelcomePage = () => {
  return (
    <div className="container">
      <h1 className="title">Bem-vindo à Aplicação - DevSecDrops</h1>
      <p className="message">Escolha uma das opções abaixo:</p>
      <div className="buttonContainer">
        <Link to="/eval" className="link">
          <button className="button">Vuln. Eval</button>
        </Link>
        <Link to="/danger" className="link">
          <button className="button">Vuln. Danger</button>
        </Link>
        <Link to="/href" className="link">
          <button className="button">Vuln. Href</button>
        </Link>
      </div>
    </div>
  );
};

export default WelcomePage;
