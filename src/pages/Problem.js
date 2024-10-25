import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Problem = ({ data, setData }) => {
    const [problem, setProblem] = useState('');

    const handleNext = () => {
        setData({ ...data, problem });
    };

    return (
        <div>
            <h2>Explora el Problema</h2>
            <textarea
                value={problem}
                onChange={(e) => setProblem(e.target.value)}
                placeholder="Describe el reto que quieres abordar..."
            />
            <Link to="/questions">
                <button onClick={handleNext}>Siguiente</button>
            </Link>
        </div>
    );
};

export default Problem;
