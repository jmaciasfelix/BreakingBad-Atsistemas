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
  console.log({ response, filter, onHide });
  const [t] = useTranslation('global');
  const show = response && Object.entries(response)?.length !== 0;

  const createResult = (filter) => {
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

ResultSearch.propTypes = {
  filter: PropTypes.string.isRequired,
  onHide: PropTypes.func.isRequired,
  response: PropTypes.shape({
    appearance: PropTypes.arrayOf(PropTypes.number).isRequired,
    better_call_saul_appearance: PropTypes.arrayOf(PropTypes.number).isRequired,
    birthday: PropTypes.string.isRequired,
    char_id: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    nickname: PropTypes.string.isRequired,
    portrayed: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }),
};
