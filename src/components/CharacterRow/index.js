import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './CharacterRow.css';
//bootstrap
import { Button, Row, Col, Spinner } from 'react-bootstrap';
//react-router
import { Link } from 'react-router-dom';
//services
import { getQuoteByAuthor } from 'services/getQuoteByAuthor';
import { getStateAuthor } from 'services/getStateAuthor';

export const CharacterRow = ({ character }) => {
  const [quote, setQuote] = useState();
  const [status, setStatus] = useState();

  useEffect(() => {
    getQuoteByAuthor(character).then((response) => {
      response[0]?.quote ? setQuote(response[0]?.quote) : setQuote('----');
      getStateAuthor(character).then((response) =>
        response ? setStatus(response) : setStatus('Unknow')
      );
    });
  }, [character]);

  return (
    <Row className="content-table">
      <Col>
        <Link to={`/characters/${character.split(' ')[0]}`}>
          <Button className="mb-2" variant="primary" size="lg" block>
            {character}
          </Button>
        </Link>
      </Col>
      <Col xs={6}>
        {quote ? quote : <Spinner animation="border" role="status"></Spinner>}
      </Col>
      <Col>
        {status ? status : <Spinner animation="border" role="status"></Spinner>}
      </Col>
    </Row>
  );
};

CharacterRow.propTypes = {};
