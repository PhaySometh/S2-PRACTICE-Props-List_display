import React from 'react';
import Card from './components/card';
import { ALL_PICTURES } from './data';
import './App.css'; // New CSS file for layout

function App() {
  return (
    <>
      <h1>Welcome to React Card App!</h1>
      <h3>By Someth Phay</h3>
      <div className="card-container">
        {ALL_PICTURES.map((info) => (
          <Card
            key={info.id}
            info={info}
          />
        ))}
      </div>
    </>
  );
}

export default App;