import React from 'react';
import PropTypes from 'prop-types';
//hooks
import { useTranslation } from 'react-i18next';
//components
import { ResultCharacter } from 'components/SearchEngine/ResultCharacter';
import { ResultQuote } from 'components/SearchEngine/ResultQuote';
import { ResultEpisode } from 'components/SearchEngine/ResultEpisode';
import { ResultKiller } from 'components/SearchEngine/ResultKiller';

export const ResultSearch = ({ response, filter, onHide }) => {
  const [t] = useTranslation('global');
  const show = response && Object.entries(response)?.length !== 0;

  const createResult = (filter) => {
    console.log(filter);
    if (filter === t('search-engine.filter.CHARACTER')) {
      return <ResultCharacter info={response} onHide={onHide} />;
    } else if (filter === t('search-engine.filter.QUOTE')) {
      return <ResultQuote info={response} onHide={onHide} />;
    } else if (filter === t('search-engine.filter.EPISODE')) {
      return <ResultEpisode info={response} onHide={onHide} />;
    } else if (filter === t('search-engine.filter.KILLER')) {
      return <ResultKiller info={response} onHide={onHide} />;
    }
  };
  return show ? createResult(filter) : null;
};

ResultSearch.propTypes = {};
