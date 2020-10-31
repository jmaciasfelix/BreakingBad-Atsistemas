import React from 'react';
import PropTypes from 'prop-types';
//bootstrap
import { Button, Card } from 'react-bootstrap';

export const ResultSearch = ({ info }) => {
  return (
    <Card>
      <Card.Img variant="top" src={info.img} />
      <Card.Body>
        <Card.Title>{info.name}</Card.Title>
        <Button variant="primary">Details</Button>
      </Card.Body>
    </Card>
  );
};

ResultSearch.propTypes = {};
