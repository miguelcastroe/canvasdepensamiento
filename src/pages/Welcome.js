import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => (
    <div>
        <h1>Bienvenido a la Web App de Pensamiento para IA</h1>
        <p>Aprende a estructurar tus ideas y obtener un documento final para aplicar lo aprendido.</p>
        <Link to="/purpose">
            <button>Comenzar</button>
        </Link>
    </div>
);

export default Welcome;
