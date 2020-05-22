const express = require('express');
const nodemailer = require('nodemailer');

const emailRouter = express.Router()

emailRouter.post('/',(req,res,next) => {
    console.log(req.body)
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'austin.moorman00@gmail.com',
          pass: 'Centervill3!'
        },
        tls: {
            rejectUnauthorized: false
        }
      });
      
      var mailOptions = {
        from: req.body.email,
        to: 'austin.moorman00@gmail.com',
        subject: `${req.body.name} at ${req.body.company} has contacted you from austinmoorman.com`,
        text: req.body.message,
        replyTo: req.body.eamil
      };
      
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          next(err)
        } else {
          console.log('Email sent: ' + info.response);
          res.sendStatus(201)
        }
      });

})

module.exports = emailRouter;