import React from 'react';
import PropTypes from 'prop-types';
import ScrollToNext from '@components/ScrollToNext';
import logo from '@images/logo.png';
import './style.scss';

const AboutPage = (props, context) => {
  const {
    theme: { colorPrimary, colorHighlight, bgPrimary, textPrimary }
  } = context;

  return (
    <div className="about-page" style={{ backgroundColor: bgPrimary }}>
      <style jsx="true">
        {`
          .highlight {
            background-color: ${colorHighlight};
          }
          ::selection {
            background-color: ${colorHighlight};
          }
        `}
      </style>
      <div className="content-grid">
        <img
            src={logo}
            alt="logo"
            className="avatar-img"
          />
        <h1 style={{ color: colorPrimary }}>About</h1>
        <div className="about-wrapper">
          <div className="about-content" style={{ color: textPrimary }}>
            <p>
              I'm a software developer based in Washington D.C (relocation friendly).
              I have a passion for front-end and love to create for web devices, yes I can hang in the back-end too.
            </p>
            <p>
              I like to keep things simple yet appealing. My goals are to challenge myself and to stay
              close to the community and try to keep tabs with the pace at which the web is evolving.
            </p>
            <p>
              JavaScript, React/Redux, Node.js, Express, SQLite, MongoDB, Python and
              PHP are the main tricks up my sleeve. I am also obsessed with making the web look pretty with LESS/CSS.
            </p>
          </div>
        </div>
      </div>
      <ScrollToNext pageSelector=".portfolio-page" />
    </div>
  );
};

AboutPage.contextTypes = {
  theme: PropTypes.any
};

export default AboutPage;
