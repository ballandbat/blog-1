/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/html-has-lang */
import React from 'react';
import PropTypes from 'prop-types';

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}

        {/* include the i-stand header for #BlackLivesMatter */}
        <script src="https://unpkg.com/i-stand/black-lives.js" type="module" />
      </head>
      <body {...props.bodyAttributes}>
        <black-lives />
        {props.preBodyComponents}
        <div
          key="body"
          id="___gatsby"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}

        {/* Fathom - beautiful, simple website analytics */}
        <script
          src="https://chickadee.mikebifulco.com/script.js"
          spa="auto"
          site="PAVJGIYJ"
          defer
        />
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
