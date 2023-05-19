import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../assets/Welcome.css';

const HrefVulnerableComponent = () => {
    const [data, setData] = useState();
    const handleType = (e) => {
        setData(e.target.value);
    };

    return (
        <div>
            <Link to="/" className="link">
                <button className="button">Voltar</button>
            </Link>

            <p><code>javascript: alert('Hacked');</code></p>
            <input
                type='text'
                name='text'
                value={data}
                onChange={(e) => handleType(e)}
                className='input'
            />
            <a href={data} className="button">Click Here</a>
        </div>
    );
};

export default HrefVulnerableComponent;