import React, { useEffect } from 'react';
import './ListOfCharacters.scss';
import PropTypes from 'prop-types';
//components
import { Character } from '../Character';
import { useDispatch, useSelector } from 'react-redux';

export const ListOfCharacters = ({ characters = [] }) => {
  const dispatch = useDispatch();
  const storeListCharacters = useSelector((state) => state.searchReducer);

  useEffect(() => {
    console.log('Me renderizo');
  }, []);
  
  return (
    <div className="ListOfCharacters">
      {characters.map(() => (
        <Character />
      ))}
    </div>
  );
};

ListOfCharacters.propTypes = {};
