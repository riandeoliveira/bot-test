const express = require("express");
const nodemailer = require("nodemailer");
require("dotenv");

const app = express();

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "0cc6b63844c249",
    pass: "4ef2df07437c5c",
  },
});

const sendMailAutomatically = async () => {
  await transport.sendMail({
    from: '"Fred Foo 👻" <oi@example.com>', // sender address
    to: "Rian Oliveira <riandiasdeoliveira2001@gmail.com>", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });
};

setInterval(() => {
  sendMailAutomatically();
  console.log("Enviado!");
}, process.env.CRAWLER_INTERVAL);

app.get("/", (req, res) => {
  res.send("Automation running successfully!");
});

app.listen(process.env.PORT || 3333, () => {
  console.log("Server running on http://localhost:3333");
});
