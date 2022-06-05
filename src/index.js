import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import BookContextProvider from './context/BookContext';
import ThemeContextProvider from './context/ThemeContext';

import App from './components/App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <ThemeContextProvider>
    <BookContextProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </BookContextProvider>
  </ThemeContextProvider>
);
