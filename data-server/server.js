const express = require('express');
const bodyParser = require('body-parser');
const NodeCache = require('node-cache');

const app = express();
app.use(bodyParser.json());

const cache = new NodeCache();

app.get('/', (_, res) => {
  res.send('Hello, world!');
});

// this is the endpoint described in the
// bing chat plugin, the chat calls this
// endpoint to get all the messages
app.get('/msgs', (_, res) => {
  const keys = cache.keys();
  const messages = keys.map(key => cache.get(key));
  res.json(messages);
});

// this endpoint is used by the website
// to post the message to this server
// any user data or info from the website
// is sent via this endpoint
app.post('/msg/:id', (req, res) => {
  console.log(req);
  const id = req.params.id;
  const msg = req.body;
  cache.set(id, msg);
  res.send('Message saved!');
});

// this endpoint is used by the website
// to delete the message posted to the server
app.delete('/msg/:id', (req, res) => {
  const id = req.params.id;
  cache.del(id);
  res.send('Message deleted!');
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});