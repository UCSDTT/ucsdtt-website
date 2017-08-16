const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const http = require('http');
const path = require('path');
const app = express();

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
      user: 'ttsdwebmaster@gmail.com',
      pass: 'ilovethetatau'
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
    res.send("Sent mail");
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
