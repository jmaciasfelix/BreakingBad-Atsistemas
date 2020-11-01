import React from 'react';
import './Character.scss';
import PropTypes from 'prop-types';
//react-router
import { Link, useRouteMatch } from 'react-router-dom';

export const Character = ({ name, img }) => {
  const { url } = useRouteMatch();
  return (
    <div className="character">
      <Link
        to={`${url}/${name.replaceAll(' ', '-')}`}
        className="character-link"
      >
        <h4>{name}</h4>
        <img loading="lazy" alt={name} src={img} />
      </Link>
    </div>
  );
};

Character.propTypes = {};
