const express = require('express');

const app = express();

app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello World'));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}...`)
);
