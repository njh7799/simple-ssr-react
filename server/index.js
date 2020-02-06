import path from 'path';
import fs from 'fs';

import React from 'react';
import express from 'express';
import ReactDOMServer from 'react-dom/server';
import { ServerStyleSheet } from 'styled-components';

import App from '../src/App';

const PORT = 3006;
const app = express();

app.use(express.static('./build'));

app.get('/*', (req, res) => {
  const sheet = new ServerStyleSheet();
  const app = ReactDOMServer.renderToString(sheet.collectStyles(<App />));
  const styleTags = sheet.getStyleTags();
  sheet.seal();

  const indexFile = path.resolve('./build/index.html');
  fs.readFile(indexFile, 'utf8', (err, html) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }
    return res.send(
      html
        .replace('<style id="ssr-css"></style>', styleTags)
        .replace('<div id="root"></div>', `<div id="root">${app}</div>`),
    );
  });
});
app.listen(PORT, () => {
  console.log(`😎 Server is listening on port ${PORT}`);
});
