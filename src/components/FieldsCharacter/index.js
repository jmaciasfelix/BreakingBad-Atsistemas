import React from 'react';
import PropTypes from 'prop-types';
//bootstrap
import { ListGroup } from 'react-bootstrap';
//i18n
import { useTranslation } from 'react-i18next';

export const FieldsCharacter = ({ character }) => {
  const [t] = useTranslation('global');
  return (
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
          {character.appearance?.map((season) => (
            <ListGroup.Item key={season}>{season}</ListGroup.Item>
          ))}
        </ListGroup>
      </ListGroup.Item>
      <ListGroup.Item>
        <ListGroup>
          {t('detailsCharacter.table.occupation')}:
          {character.occupation?.map((job) => (
            <ListGroup.Item key={job}>{job}</ListGroup.Item>
          ))}
        </ListGroup>
      </ListGroup.Item>
    </ListGroup>
  );
};

FieldsCharacter.propTypes = {
  character: PropTypes.shape({
    char_id: PropTypes.number.isRequired,
    birthday: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    nickname: PropTypes.string.isRequired,
    portrayed: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    appearance: PropTypes.arrayOf(PropTypes.number).isRequired,
    better_call_saul_appearance: PropTypes.arrayOf(PropTypes.number).isRequired,
  }),
};
