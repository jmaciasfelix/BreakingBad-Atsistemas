import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Form.scss';
//hooks
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
//actions Redux
import { searchLoading } from 'actions';
//components
import { ResultSearch } from 'components/ResultSearch';

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
  const dispatch = useDispatch();
  const storeSearch = useSelector((state) => state.searchReducer);
  console.log(storeSearch);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(searchLoading({ searchValue, filter }));
    setSearchValue('');
  };
  const handleChangedFilter = (e) => {
    setFilter(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <button disabled={storeSearch.loading}>
          {t('search-engine.submit')}
        </button>
        <input
          placeholder={t('search-engine.placeholder')}
          onChange={(e) => setSearchValue(e.target.value)}
          disabled={storeSearch.loading}
          value={searchValue}
        />
        <select value={filter} onChange={handleChangedFilter}>
          <option disabled>Filter:</option>
          {FILTER.map((filter) => (
            <option key={filter}>{filter}</option>
          ))}
        </select>
      </form>
      {
        !storeSearch?.loading && <ResultSearch info={storeSearch.lastSearch} />
      }
    </>
  );
};

Form.propTypes = {};
