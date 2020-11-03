import React, { useState } from 'react';
import PropTypes from 'prop-types';
//hooks
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
//actions Redux
import { searchLoading } from 'actions/search.action';
//bootstrap
import { Button, Form as FormBootstrap, FormControl } from 'react-bootstrap';

export const Form = () => {
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
      <FormBootstrap inline onSubmit={handleSubmit}>
        <FormControl
          type="text"
          placeholder={t('search-engine.placeholder')}
          className=" mr-sm-2"
          onChange={(e) => setSearchValue(e.target.value)}
          disabled={storeSearch.loading}
          value={searchValue}
        />
        <Button type="submit" disabled={storeSearch.loading}>
          {t('search-engine.submit')}
        </Button>
        <FormControl
          as="select"
          custom
          value={filter}
          onChange={handleChangedFilter}
        >
          <option disabled>Filter:</option>
          {FILTER.map((filter) => (
            <option key={filter}>{filter}</option>
          ))}
        </FormControl>
      </FormBootstrap>
    </>
  );
};

Form.propTypes = {};
