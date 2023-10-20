import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import MovieCard from './Moviecard';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <MovieCard/>
  </React.StrictMode>
);


