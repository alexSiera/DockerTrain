import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
