import React from 'react';
import PropTypes from 'prop-types';

export const ResultSearch = ({ info }) => (
  <div>
    <p>{info.name}</p>
    <p>{info.status}</p>
    <p>{info.birthday}</p>
  </div>
);

ResultSearch.propTypes = {};
