import React, { useEffect, useState, useContext } from 'react';
import PropTypes from 'prop-types';
import './DetailsCharacter.css';
//react-router
import { Link, useRouteMatch } from 'react-router-dom';
//components
import { Spinner } from 'components/Spinner';
import { Character } from 'components/Character';
//bootstrap
import { Button, Carousel, ListGroup } from 'react-bootstrap';
import { useCharacter } from 'hooks/useCharacter';
//services
import { getQuoteByAuthor } from 'services/getQuoteByAuthor';
//i18n
import { useTranslation } from 'react-i18next';
//context
import ThemeContext from 'context/ThemeContext';

export const DetailsCharacter = () => {
  const { theme } = useContext(ThemeContext);
  const themeCharacterDetails =
    theme === 'darkTheme' ? 'dark-character' : 'light-character';
  const [t] = useTranslation('global');
  const { url } = useRouteMatch();
  const [loading, character] = useCharacter(
    url.split('/').pop().replaceAll('-', ' ')
  );
  const [quotes, setQuotes] = useState([{}]);

  useEffect(() => {
    character?.name &&
      getQuoteByAuthor(character?.name.replaceAll(' ', '+')).then((response) =>
        setQuotes(response)
      );
  }, [character]);

  return (
    <div className="py-5 min-height">
      {loading ? (
        <Spinner />
      ) : character?.name ? (
        <>
          {quotes[0]?.quote && (
            <div className="py-5">
              <h2>{t('detailsCharacter.quotes')}</h2>
              <Carousel
                interval={null}
                controls={false}
                className={`my-5 carousel-quotes ${themeCharacterDetails}`}
              >
                {quotes.map((quote) => (
                  <Carousel.Item key={quote?.quote_id} className="py-5">
                    <h3>"{quote?.quote}"</h3>
                  </Carousel.Item>
                ))}
              </Carousel>
            </div>
          )}
          <Character name={character.name} img={character.img}>
            <ListGroup className="mt-5 txt-black">
              <ListGroup.Item>
                {t('detailsCharacter.table.birthday')}: {character.birthday}{' '}
              </ListGroup.Item>
              <ListGroup.Item>
                {t('detailsCharacter.table.status')}: {character.status}{' '}
              </ListGroup.Item>
              <ListGroup.Item>
                {t('detailsCharacter.table.nickname')}: {character.nickname}{' '}
              </ListGroup.Item>
              <ListGroup.Item>
                {t('detailsCharacter.table.portrayed')} {character.portrayed}{' '}
              </ListGroup.Item>
              <ListGroup.Item>
                {t('detailsCharacter.table.category')}: {character.category}{' '}
              </ListGroup.Item>
              <ListGroup.Item>
                <ListGroup>
                  {t('detailsCharacter.table.appearance')}:
                  {character?.appearance?.map((season) => (
                    <ListGroup.Item key={season}>{season}</ListGroup.Item>
                  ))}
                </ListGroup>
              </ListGroup.Item>
              <ListGroup.Item>
                <ListGroup>
                  {t('detailsCharacter.table.occupation')}:
                  {character?.occupation?.map((job) => (
                    <ListGroup.Item key={job}>{job}</ListGroup.Item>
                  ))}
                </ListGroup>
              </ListGroup.Item>
            </ListGroup>
          </Character>
        </>
      ) : (
        <h1 className="my-5">{t('detailsCharacter.error')}</h1>
      )}
    </div>
  );
};

DetailsCharacter.propTypes = {};
