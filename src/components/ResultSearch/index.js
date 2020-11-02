import React from 'react';
import PropTypes from 'prop-types';
//bootstrap
import { Button, Card, Row, Col } from 'react-bootstrap';
//react-router
import { Link } from 'react-router-dom';
//hooks
import { useTranslation } from 'react-i18next';

export const ResultSearch = ({ info, onHide }) => {
  const [t] = useTranslation('global');
  const show = info && Object.entries(info)?.length !== 0;
  return show ? (
    <Card>
      <Card.Img variant="top" src={info.img} />
      <Card.Body>
        <Row>
          <Col>
            <Card.Title>{info.name}</Card.Title>
          </Col>
          <Col>
            <Link
              to={`/characters/${info.name.replaceAll(' ', '+')}`}
              onClick={() => onHide()}
            >
              <Button variant="primary" block>
                {t('search-engine.details')}
              </Button>
            </Link>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  ) : null;
};

ResultSearch.propTypes = {};
