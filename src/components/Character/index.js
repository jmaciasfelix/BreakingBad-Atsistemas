import React from 'react';
import './Character.scss';
import PropTypes from 'prop-types';

export const Character = ({ name, img }) => (
  <div className="character">
    <a className="character-link">
      <h4>{name}</h4>
      <img loading="lazy" alt={name} src={img} />
    </a>
  </div>
);

Character.propTypes = {};
