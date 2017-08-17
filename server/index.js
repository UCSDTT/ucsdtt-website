const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const http = require('http');
const path = require('path');
const app = express();

require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../build')));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../build'));
});

app.post('/contact', function(req, res){
  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  const mailOptions = req.body;

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      res.json({
        success: false,
        message: error
      })
      return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
    res.json({
        success: true,
        message: error
    })
});
});

const server = http.createServer(app);
server.listen(80, function () {
  console.log('Example app listening on port 80!')
});
