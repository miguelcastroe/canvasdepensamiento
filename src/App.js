import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Purpose from './pages/Purpose';
import Problem from './pages/Problem';
import Review from './pages/Review';

function App() {
  const [data, setData] = useState({});

  return (
    <Router basename="/canvasdepensamiento">
      <div>
        <header>
          <h1>Web App de Pensamiento para IA</h1>
        </header>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/purpose" element={<Purpose data={data} setData={setData} />} />
          <Route path="/problem" element={<Problem data={data} setData={setData} />} />
          <Route path="/review" element={<Review data={data} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
