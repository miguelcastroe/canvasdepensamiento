import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Purpose from './pages/Purpose';
import Problem from './pages/Problem';
import Review from './pages/Review';

function App() {
    const [data, setData] = useState({});

    return (
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Welcome />
                </Route>
                <Route path="/purpose">
                    <Purpose data={data} setData={setData} />
                </Route>
                <Route path="/problem">
                    <Problem data={data} setData={setData} />
                </Route>
                <Route path="/review">
                    <Review data={data} />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
