import React, { useContext } from 'react';
import './DetailsCharacter.css';
//components
import { Spinner } from 'components/Spinner';
import { Character } from 'components/Character';
import { Quotes } from 'components/Quotes';
import { FieldsCharacter } from 'components/FieldsCharacter';
//bootstrap
import { Alert } from 'react-bootstrap';
//context
import ThemeContext from 'context/ThemeContext';
//hooks
import { useTranslation } from 'react-i18next';
import { useCharacter } from 'hooks/useCharacter';

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
          {quotes && quotes[0] ? (
            <Quotes
              quotes={quotes}
              themeCharacterDetails={themeCharacterDetails}
            />
          ) : (
            <Alert variant="warning">{t('detailsCharacter.errorQuote')}</Alert>
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