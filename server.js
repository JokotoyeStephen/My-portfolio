import express from "express";
import dotenv from "dotenv"
import bodyParser from "body-parser";
import nodemailer from "nodemailer";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

dotenv.config()

const PORT = process.env.PORT || 3300
const _dirname = dirname(fileURLToPath(import.meta.url));

app.use(bodyParser.urlencoded({extended:true}));

app.use(express.json());
const filepath = path.join(_dirname, "public");

console.log(filepath);
app.use(express.static(filepath))

app.post("/contact", async (req , res) => {
   const { name , email , phone, message } = req.body;
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
