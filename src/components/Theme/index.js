import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Theme.css';
//context
import ThemeContext from 'context/ThemeContext';

export const Theme = ({ children }) => {
  const [theme, setTheme] = useState('darkTheme');
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={theme}>{children}</div>
    </ThemeContext.Provider>
  );
};

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};
