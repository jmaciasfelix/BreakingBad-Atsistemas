import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import './DetailsCharacter.css';
//components
import { Spinner } from 'components/Spinner';
import { Character } from 'components/Character';

import { useCharacter } from 'hooks/useCharacter';
//i18n
import { useTranslation } from 'react-i18next';
//context
import ThemeContext from 'context/ThemeContext';
import { Quotes } from 'components/Quotes';
import { FieldsCharacter } from 'components/FieldsCharacter';

export const DetailsCharacter = () => {
  const { theme } = useContext(ThemeContext);
  const themeCharacterDetails =
    theme === 'darkTheme' ? 'dark-character' : 'light-character';
  const [t] = useTranslation('global');
  const [isLoading, character, isError, quotes] = useCharacter();

  return (
    <div className="py-5 min-height">
      {isLoading ? (
        <Spinner />
      ) : isError ? (
        <h1 className="my-5">{t('detailsCharacter.error')}</h1>
      ) : (
        <>
          {quotes && (
            <Quotes
              quotes={quotes}
              themeCharacterDetails={themeCharacterDetails}
            />
          )}
          {character && (
            <Character name={character.name} img={character.img}>
              <FieldsCharacter character={character} />
            </Character>
          )}
        </>
      )}
    </div>
  );
};

DetailsCharacter.propTypes = {};
