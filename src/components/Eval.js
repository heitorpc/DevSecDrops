import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../assets/Welcome.css';

const EvalVulnerableComponent = () => {
  const [name, setName] = useState('');

  const handleSubmit = () => {
    eval(`alert("Olá, ${name}!");`);
  };

  return (
    <div>
      <Link to="/" className="link">
        <button className="button">Voltar</button>
      </Link>
      <p><code>"); alert('Hacked'); alert("</code></p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className='input'
      />
      <button onClick={handleSubmit} className='button'>Enviar</button>
    </div>
  );
};

export default EvalVulnerableComponent;
