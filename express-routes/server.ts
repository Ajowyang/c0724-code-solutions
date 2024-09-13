import express from 'express';

const app = express();

app.use((req, res, next) => {
  console.log('The date is', new Date());
  next();
});

app.get('/', (req, res) => {
  res.send('For "GET /" Root route!!!');
});

app.get('/notes', (req, res) => {
  res.send('For "GET /notes" NOTES!!!');
});

app.post('/notes/123', (req, res) => {
  res.send('For "POST /notes/123" NOTES/123!!!');
});
// test with http localhost:8080/notes/123

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
