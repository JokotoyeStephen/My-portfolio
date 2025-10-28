import express from "express";

import dotenv from "dotenv"
// import express js
import bodyParser from "body-parser";

// import nodemailer a node.js module used to send email
import nodemailer from "nodemailer";

import path from "path";

import { dirname } from "path";

import { fileURLToPath } from "url";
const _dirname = dirname(fileURLToPath(import.meta.url));


dotenv.config()

const app = express();

const PORT = process.env.PORT || 5000 
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.json());

const filepath = path.join(_dirname, "/");

console.log(filepath);

app.use(express.static(filepath))

app.post("/contact", async (req , res) => {
   const { name , email , phone,service,country, message } = req.body;
    console.log(req.body)

    // Create a transporter for SMTP
    const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
});
 const mailOptions = {
    from: email,  // sender address
    to: process.env.EMAIL_USER,  //list of recievers
    subject : `New Contact Message FROM ${name}`,
    phone: phone,
    service:service,
    country:country,
    text: message, //plain text body
    };

try {
  await transporter.sendMail(mailOptions);
  res.send("THANK YOU");
}
catch (err) {
  console.log("send error:",err.message);
  // res.status(500).send("Error sending email")
};
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

