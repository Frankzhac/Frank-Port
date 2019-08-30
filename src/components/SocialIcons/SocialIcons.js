import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const SocialIcons = (props, context) => {
  const { theme: { colorPrimary } } = context;

  return (
    <div className="social-icons animate-icons">
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/Frankzhac" style={ { color: colorPrimary } }><i className="fab fa-github"></i></a>
        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/frank-hemle-bb18a871/" style={ { color: colorPrimary } }><i className="fab fa-linkedin"></i></a>
        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/undefined_FH?s=03" style={ { color: colorPrimary } }><i className="fab fa-twitter"></i></a>
      </div>
  );
};

SocialIcons.contextTypes = {
  theme: PropTypes.any
};

export default SocialIcons;
