const express = require("express");
const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const mg = mailgun.client({username: 'api', key: process.env.MAILGUN_API_KEY || 'ed095644f1ed203a47f1336a50c2c1a6-181449aa-7a4d91ae'});
  app.post("/api/email", (req, res) => {
    const { firstName,email, company,subject, message,phoneNumber } = req.body;  
      mg.messages.create('net-work.nz', {
            from: "Netbloom User <mailgun@snet-work.nz>",
            to: ["matthew@netbloom.co.nz"],
            subject: subject,
            html: "<div> <span>"
            + firstName + " from <strong>"+ company +"</strong></span>" +
            email +"<br /> "+ phoneNumber+"<br />"+
            message
            +"</div>"
          })
          .then(msg => console.log(msg)) // logs response data
          .catch(err => console.error(err)); // logs any error
  });
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`App is served at port ${port}`);
});