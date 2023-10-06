require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const todoRoutes = require('./routes/todos');
const app = express();
connectDB();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ extended: false }));
app.use('/api/todos', todoRoutes);
app.get('/', (req, res) =>
  res.send(`Go to <a href="/api/todos">/api/todos</a> for the Todos API`)
);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}...`)
);
