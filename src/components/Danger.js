import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../assets/Welcome.css';

const DangerVulnerableComponent = () => {
    const [name, setName] = useState();

    const handleType = (e) => {
        setName(e.target.value);
    };

    return (
        <div>
            <Link to="/" className="link">
                <button className="button">Voltar</button>
            </Link>
            <p> <code> {`<img src=x onerror=alert('Hacked')//>`} </code></p>
            <input
                type="text"
                value={name}
                onChange={(e) => handleType(e)}
            />
            <button onClick={handleType} className='button'>Enviar</button>
            <div dangerouslySetInnerHTML={{ __html: name }} /></div>
    );
};

export default DangerVulnerableComponent;