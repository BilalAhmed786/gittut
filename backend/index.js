require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

const PORT = 4000;

app.use(cors());
app.use(express.json())



// Route to handle newsletter subscriptions
app.post("/subscribe", async (req, res) => {
 
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required!" });
  }

   const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587, // Use 465 if using SSL
    secure: false, // true for 465, false for 587
    auth: {
      user: "",
      pass: "" // Use Gmail App Password
    }
  })

  const mailOptions = {
    from: '',
    to: email,
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
