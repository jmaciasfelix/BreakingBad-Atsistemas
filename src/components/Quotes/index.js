import React from 'react';
import PropTypes from 'prop-types';
//bootstrap
import { Carousel } from 'react-bootstrap';
//i18n
import { useTranslation } from 'react-i18next';

export const Quotes = ({ quotes, themeCharacterDetails }) => {
  const [t] = useTranslation('global');

  return (
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
  );
};

Quotes.propTypes = {};
