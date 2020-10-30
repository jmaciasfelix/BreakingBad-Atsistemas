import React, { useState } from 'react';
import PropTypes from 'prop-types';
//hooks
import { useTranslation } from 'react-i18next';
//services
import { getInformationByFilter } from 'services/getInformationByFilter';

export const Form = (props) => {
  const [t] = useTranslation('global');
  const FILTER = [
    t('search-engine.filter.CHARACTER'),
    t('search-engine.filter.EPISODE'),
    t('search-engine.filter.QUOTE'),
    t('search-engine.filter.KILLER'),
  ];
  const [searchValue, setSearchValue] = useState('');
  const [filter, setFilter] = useState(FILTER[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('handleSubmit Form search');
    getInformationByFilter('Walter', filter);
  };
  const handleChangedFilter = (e) => {
    setFilter(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <button>{t('search-engine.submit')}</button>
      <input
        placeholder={t('search-engine.placeholder')}
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
