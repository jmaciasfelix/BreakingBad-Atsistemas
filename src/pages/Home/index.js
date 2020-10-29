import React from 'react';
//react-router-dom
import { Link } from 'react-router-dom';

export const Home = () => (
  <>
    <div className="container-home">
      <Link to={`temporadas`}>
        <h2>Temporadas 🎥</h2>
      </Link>
      <Link to={`personajes`}>
        <h2>Personajes 🧑‍🤝‍🧑</h2>
      </Link>
      <Link to={`asesinos`}>
        <h2>Asesinos 🔪</h2>
      </Link>
    </div>
  </>
);
