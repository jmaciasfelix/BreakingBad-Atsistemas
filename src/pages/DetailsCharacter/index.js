import React, { useEffect, useState } from 'react';
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

export const DetailsCharacter = () => {
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

  return loading ? (
    <Spinner />
  ) : character?.name ? (
    <>
      {quotes[0]?.quote && (
        <div className="my-5">
          <h2>{t('detailsCharacter.quotes')}</h2>
          <Carousel
            interval={null}
            controls={false}
            className="my-5 carousel-quotes"
          >
            {quotes.map((quote) => (
              <Carousel.Item key={quote?.quote_id} className="py-5">
                <h3>"{quote?.quote}"</h3>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      )}
      <h1>
        <Character name={character.name} img={character.img}>
          <ListGroup className="my-5">
            <ListGroup.Item>Cumpleaños: {character.birthday} </ListGroup.Item>
            <ListGroup.Item>Estado: {character.status} </ListGroup.Item>
            <ListGroup.Item>Nickname: {character.nickname} </ListGroup.Item>
            <ListGroup.Item>
              Interpretado por {character.portrayed}{' '}
            </ListGroup.Item>
            <ListGroup.Item>Categoria: {character.category} </ListGroup.Item>
            <ListGroup.Item>
              <ListGroup>
                Apariciones:
                {character.appearance.map((season) => (
                  <ListGroup.Item key={season}>{season}</ListGroup.Item>
                ))}
              </ListGroup>
            </ListGroup.Item>
            <ListGroup.Item>
              <ListGroup>
                Ocupación:
                {character.occupation.map((job) => (
                  <ListGroup.Item key={job}>{job}</ListGroup.Item>
                ))}
              </ListGroup>
            </ListGroup.Item>
          </ListGroup>
        </Character>
      </h1>
    </>
  ) : (
    <h1 className="my-5">{t('detailsCharacter.error')}</h1>
  );
};

DetailsCharacter.propTypes = {};
