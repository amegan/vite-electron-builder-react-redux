import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { setupStore } from './redux/store';

import App from './App';
const store = setupStore();

const root = createRoot(document.getElementById('app')! as Element);
root.render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>,
);