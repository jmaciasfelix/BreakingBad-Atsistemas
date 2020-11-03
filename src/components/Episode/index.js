import React from "react";
import PropTypes from "prop-types";
//components
import { ListCharactersEpisode } from 'components/ListCharactersEpisode';
//bootstrap
import { Col, Row } from 'react-bootstrap';
//i18n
import { useTranslation } from 'react-i18next';

export const Episode = ({episode}) => {
    const [t] = useTranslation('global');
    return(
        <>
          <div className="my-5">
            <h1>{`${t('detailsEpisodePage.season')} ${episode.season} - ${t(
              'detailsEpisodePage.episode'
            )}  ${episode.episode}`}</h1>
            <p className="details-episode">
              {`${t('detailsEpisodePage.title')} : ${episode.title}`}{' '}
              <span>{`📡 ${episode?.air_date?.replaceAll('-', '/')}`}</span>
            </p>
          </div>
          <div className="my-5">
            <h2 className="mb-4">{t('detailsEpisodePage.table.title')} </h2>
            <Row className="heading-table">
              <Col>{t('detailsEpisodePage.table.name')} </Col>
              <Col xs={6}>{t('detailsEpisodePage.table.quote')} </Col>
              <Col>{t('detailsEpisodePage.table.status')} </Col>
            </Row>
            <ListCharactersEpisode episode={episode} />
          </div>
        </>
    )
}

Episode.propTypes = {};