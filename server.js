const offices = require('./data/offices');
const projects = require('./data/projects');
const teamMembers = require('./data/teamMembers');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/offices', (req, res) => {
  res.send({ offices: offices });
});

app.get('/api/members', (req, res) => {
  res.send({ members: teamMembers });
});

app.get('/api/projects', (req, res) => {
  res.send({ projects: projects });
});

app.listen(port, () => console.log(`Listening on port ${port}`));