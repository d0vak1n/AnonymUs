import express from 'express';
import http from 'http';

const app = express();
const server = http.createServer(app);

app.get('/', (req:any, res:any) => {
  res.sendFile(__dirname + '/html/index.html');
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});