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

const html = fs.readFileSync(path.resolve('./build/index.html'), 'utf8');

app.get('/*', (req, res) => {
  if (!html) return res.status(500).send('Oops, better luck next time!');
  const sheet = new ServerStyleSheet();
  const app = ReactDOMServer.renderToString(sheet.collectStyles(<App />));
  const styleTags = sheet.getStyleTags();
  sheet.seal();
  return res.send(
    html.replace(
      '<div id="root"></div>',
      `<div id="root">${styleTags}${app}</div>`,
    ),
  );
});

app.listen(PORT, () => {
  console.log(`😎 Server is listening on port ${PORT}`);
});
