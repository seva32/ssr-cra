import escapeStringRegexp from "escape-string-regexp";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { ServerStyleSheet } from "styled-components";

import App from "../../client/App.jsx";

const renderMiddleware = () => (req, res) => {
  let html = req.html;
  const sheet = new ServerStyleSheet();
  const htmlContent = ReactDOMServer.renderToString(
    sheet.collectStyles(<App />)
  );
  const htmlReplacements = {
    HTML_CONTENT: htmlContent,
    STYLE_TAGS: sheet.getStyleTags(),
  };

  Object.keys(htmlReplacements).forEach((key) => {
    const value = htmlReplacements[key];
    html = html.replace(
      new RegExp(`__${escapeStringRegexp(key)}__`, "g"),
      value
    );
  });

  res.send(html);
};

export default renderMiddleware;
