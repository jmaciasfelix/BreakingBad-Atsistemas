import React from 'react';
import PropTypes from 'prop-types';
//bootstrap
import { Button, Card } from 'react-bootstrap';
//react-router
import { Link } from 'react-router-dom';

export const ResultSearch = ({ info, onHide }) => {
  const show = info && Object.entries(info)?.length !== 0;
  return show ? (
    <Card>
      <Card.Img variant="top" src={info.img} />
      <Card.Body>
        <Card.Title>{info.name}</Card.Title>
        <Link
          to={`/characters/${info.name.replaceAll(' ', '+')}`}
          onClick={() => onHide()}
        >
          <Button variant="primary">Details</Button>
        </Link>
      </Card.Body>
    </Card>
  ) : null;
};

ResultSearch.propTypes = {};
