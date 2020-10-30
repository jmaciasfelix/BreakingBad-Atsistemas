import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Form.scss';
//hooks
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
//services
import { getInformationByFilter } from 'services/getInformationByFilter';
//actions Redux
import { searchLoading } from 'actions';

export const Form = (props) => {
  const [t] = useTranslation('global');
  const dispatch = useDispatch();
  const FILTER = [
    t('search-engine.filter.CHARACTER'),
    t('search-engine.filter.EPISODE'),
    t('search-engine.filter.QUOTE'),
    t('search-engine.filter.KILLER'),
  ];
  const [searchValue, setSearchValue] = useState('');
  const [filter, setFilter] = useState(FILTER[0]);
  const [result, setResult] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log('handleSubmit Form search');
    // getInformationByFilter(searchValue, filter).then((response) =>
    //   setResult(response[0])
    // );
    dispatch(searchLoading());
    console.log(searchLoading());
  };
  const handleChangedFilter = (e) => {
    setFilter(e.target.value);
  };

  return (
    <>
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
        {result && (
          <div>
            <h3>{result.name}</h3>
            <figure>
              <img src={result.img} alt={result.name || ''} />
            </figure>
            <p>Nickname: {result.nickname}</p>
          </div>
        )}
      </form>
    </>
  );
};

Form.propTypes = {};
