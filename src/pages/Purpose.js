import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Purpose = ({ data, setData }) => {
    const [purpose, setPurpose] = useState('');

    const handleNext = () => {
        setData({ ...data, purpose });
    };

    return (
        <div>
            <h2>Define tu Propósito</h2>
            <textarea
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                placeholder="Describe el propósito de usar la IA..."
            />
            <Link to="/problem">
                <button onClick={handleNext}>Siguiente</button>
            </Link>
        </div>
    );
};

export default Purpose;
