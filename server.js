import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

const filepath = path.join(__dirname, "/");
console.log(filepath);

app.use(express.static(filepath));
app.post("/contact", async (req, res) => {
  const { name, email, phone, service, country, message } = req.body;

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

  // Email sent to you (admin)
  const adminMail = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `New Contact Message from ${name}`,
    text: `
Name: ${name}
Email: ${email}
Phone: ${phone}
Service: ${service}
Country: ${country}
Message: ${message}
`,
  };

  // Auto reply email to the user
  const autoReply = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "We Received Your Message",
    text: `
Hello ${name},

Thank you for contacting us. We have received your message and will get back to you as soon as possible.

Here is a copy of your message:

Service: ${service}
Message: ${message}

Best regards,
Support Team
`,
  };

  try {
    // Send both emails
    await transporter.sendMail(adminMail);
    await transporter.sendMail(autoReply);

    res.json({
      status: "success",
      message: "Message sent successfully",
    });

  } catch (err) {
    console.log(err);

    res.status(500).json({
      status: "error",
      message: "Email sending failed",
    });
  }
});
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});