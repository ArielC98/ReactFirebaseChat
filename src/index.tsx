import React from 'react';
import { createRoot } from 'react-dom/client';

const App: React.FC = () => <h1>🔥 React + TypeScript + Webpack + Babel</h1>;

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
