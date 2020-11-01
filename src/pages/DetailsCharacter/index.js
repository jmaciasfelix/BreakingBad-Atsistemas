import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './DetailsCharacter.css';
//react-router
import { Link, useRouteMatch } from 'react-router-dom';
//components
import { Spinner } from 'components/Spinner';
//bootstrap
import { Button, Carousel } from 'react-bootstrap';
import { useCharacter } from 'hooks/useCharacter';
//services
import { getQuoteByAuthor } from 'services/getQuoteByAuthor';

export const DetailsCharacter = () => {
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
        <Carousel
          interval={null}
          controls={false}
          className="my-5 carousel-quotes"
        >
          {quotes.map((quote) => (
            <Carousel.Item key={quote?.quote_id} className="py-5">
              <h3>{quote?.quote}</h3>
            </Carousel.Item>
          ))}
        </Carousel>
      )}
      <h1>{character.name}</h1>
    </>
  ) : null;
};

DetailsCharacter.propTypes = {};
