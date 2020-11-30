import React from 'react';
import Main from './components/Main/Main'
import { BrowserRouter } from 'react-router-dom'
import Store from './store/Redux'
import { Provider } from 'react-redux'

const App = () => {
    return (
        <Provider store={Store}>
            <BrowserRouter>
                <Main/>
            </BrowserRouter>
        </Provider>
    );
};

export default App;
