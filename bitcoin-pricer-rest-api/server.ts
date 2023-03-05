import express from 'express';
import cors from 'cors';

const PORT = 8080;
const HOST = '0.0.0.0';

const app = express();
app.use(cors());

app.get('/api/v1/date', async (req, res) => {
  const date = new Date().toString();
  res.send(date);
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});