import React from 'react';
import { createRoot } from 'react-dom/client';

const root = document.getElementById('root');
export const App = () => <h1>React 測試 ++</h1>;
console.log('Hi React')
createRoot(root).render(<App />);