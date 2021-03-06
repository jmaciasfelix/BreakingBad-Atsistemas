import React from 'react';
import './Character.css';
import PropTypes from 'prop-types';
//react-router
import { Link } from 'react-router-dom';

export const Character = ({ name, img, children }) => {
  return (
    <div className="character">
      <Link
        to={`/characters/${name?.replaceAll(' ', '-')}`}
        className="character-link"
      >
        <h4>{name}</h4>
        <img loading="lazy" alt={name} src={img} />
      </Link>
      {children}
    </div>
  );
};

Character.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
