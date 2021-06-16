const express = require('express');
const history = require('connect-history-api-fallback');

const app = express();
const path = `${__dirname}/dist/`;

app.use(history());
app.use(express.static(path));

/* app.get('/', (req, res) => {
  res.sendFile(`${path}index.html`);
}); */

const PORT = process.env.PORT || 5000;

app.get('/api', (req, res) => {
  res.json({ message: 'hello' });
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Application dispo sur localhost:${PORT}`);
});
