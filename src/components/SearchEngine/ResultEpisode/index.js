import React from 'react';
import PropTypes from 'prop-types';
//bootstrap
import { Button, Card, Row, Col } from 'react-bootstrap';
//react-router
import { Link } from 'react-router-dom';
//hooks
import { useTranslation } from 'react-i18next';

export const ResultEpisode = ({ info, onHide }) => {
  const [t] = useTranslation('global');
  const show = info && Object.entries(info)?.length !== 0;
  return show ? (
    <Card>
      <Card.Body>
        <Row>
          <Col>
            <Card.Title>Title {info.title}</Card.Title>
            <Card.Subtitle>Season {info.season}</Card.Subtitle>
          </Col>
          <Col>
            <Link
              to={`/seasons/${info.season}/episode/${info.episode_id}`}
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

ResultEpisode.propTypes = {
  info: PropTypes.object.isRequired,
  onHide: PropTypes.func.isRequired,
};
