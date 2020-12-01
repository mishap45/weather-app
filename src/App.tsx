import React from 'react';
import Main from './components/Main/Main'
import { HashRouter } from 'react-router-dom'
import Store from './store/Redux'
import { Provider } from 'react-redux'

const App = () => {
    return (
        <Provider store={Store}>
            <HashRouter basename={process.env.PUBLIC_URL}>
                <Main/>
            </HashRouter>
        </Provider>
    );
};

export default App;
