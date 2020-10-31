import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../../logo.png';
//components
import { SearchEngine } from 'components/SearchEngine';
//hooks
import { useTranslation } from 'react-i18next';
//react-router
import { Link } from 'react-router-dom';
//bootstrap
import { Navbar, Button } from 'react-bootstrap';

export const NavApp = () => {
  const [t, i18n] = useTranslation('global');
  const handleLgn = () => {
    i18n.language === 'es'
      ? i18n.changeLanguage('en')
      : i18n.changeLanguage('es');
  };

  return (
    <Navbar className="justify-content-between nav-container">
      <Navbar.Brand>
        <Link to="/">
          <img
            className="d-inline-block align-top"
            alt="Breaking Bad logo"
            width="60"
            height="60"
            src={Logo}
          />
        </Link>
      </Navbar.Brand>
      <div>
        <Button className="mr-2" variant="light" onClick={handleLgn}>
          {t('nav.lang')}
        </Button>
        <SearchEngine />
      </div>
    </Navbar>
  );
};

NavApp.propTypes = {};
