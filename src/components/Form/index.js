import React, { useState } from 'react';
import PropTypes from 'prop-types';
//services
import { getCharacter } from 'services/getCharacter';

export const Form = (props) => {
  const FILTER = ['Personaje', 'Cita', 'Episodio', 'Asesino'];
  const [searchValue, setSearchValue] = useState('');
  const [filter, setFilter] = useState(FILTER[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('handleSubmit Form search');
    getCharacter('Walter');
  };
  const handleChangedFilter = () => {
    console.log('handleChangedFilter');
  };

  return (
    <form onSubmit={handleSubmit}>
      <button>Search</button>
      <input
        placeholder="Search the Breaking Bad information..."
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
      />
      <select value={filter} onChange={handleChangedFilter}>
        <option disabled>Filter:</option>
        {FILTER.map((filter) => (
          <option key={filter}>{filter}</option>
        ))}
      </select>
    </form>
  );
};

Form.propTypes = {};
