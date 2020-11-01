import React from 'react';
import PropTypes from 'prop-types';
//react-router
import { Link, useRouteMatch } from 'react-router-dom';
//components
import { Spinner } from 'components/Spinner';
//bootstrap
import { Button } from 'react-bootstrap';
import { useCharacter } from 'hooks/useCharacter';

export const DetailsCharacter = () => {
  const { url } = useRouteMatch();
  const [loading, character] = useCharacter(
    url.split('/').pop().replaceAll('-', ' ')
  );
  console.log(character);

  return loading ? (
    <Spinner />
  ) : character?.name ? (
    <>
      <p>{character.name}</p>
    </>
  ) : null;
};

DetailsCharacter.propTypes = {};
