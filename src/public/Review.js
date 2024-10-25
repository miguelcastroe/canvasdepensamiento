import React from 'react';
import { Link } from 'react-router-dom';
import { jsPDF } from 'jspdf';

const Review = ({ data }) => {
    const handleDownload = () => {
        const doc = new jsPDF();
        doc.text("Resumen del Proceso de Pensamiento", 10, 10);
        doc.text(`Propósito: ${data.purpose}`, 10, 20);
        doc.text(`Problema: ${data.problem}`, 10, 30);
        doc.save("documento_final.pdf");
    };

    return (
        <div>
            <h2>Revisa tu Proceso</h2>
            <pre>{JSON.stringify(data, null, 2)}</pre>
            <button onClick={handleDownload}>Descargar PDF</button>
            <Link to="/">
                <button>Volver al Inicio</button>
            </Link>
        </div>
    );
};

export default Review;
