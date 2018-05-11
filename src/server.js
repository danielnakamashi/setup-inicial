import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './components/App.jsx';

export default (req, res) => {
  const html = renderToString(<App />);
  const template = `<!DOCTYPE html>
    <html>
    <head>
      <title>test app</title>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no" />
    </head>
    <body>
      <div id="app">${html}</div>
      <script src="/dist/client.js"></script>
    </body>
    </html>
  `;

  res.set('Content-Type', 'text/html');
  res.send(template);
}