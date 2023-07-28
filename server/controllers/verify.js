import nodemailer from "nodemailer";

let transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  service: "gmail",
  port: process.env.SMTP_PORT,
  SMTP_HOST:'smtp.forwardemail.net',
  SMTP_PORT:'465',
  secure: true, // true for 465, false for other ports
  // logger: true,
  // debug: true,
  secureConnection: true,
  auth: {
    user: "stacktestovelflow@gmail.com", // generated ethereal user
    pass: "fnzzyxjbrnvqkoys", // generated ethereal password
  },
  tls: {
    rejectUnauthorized: false,
  },
});
var randomNum = Math.floor(1000 + Math.random() * 5000);
export const mobileGet = (req, res) => {
  const email = req.body.email;
  // @ ----------- NodeMailer --------------

  var mailOptions = {
    from: process.env.SMTP_MAIL,
    to: email,
    subject: "Chatbot Verification",
    text: `This OTP is for your Chatbot Verification, Your OTP is ${randomNum}`,
  };

  transporter
    .sendMail(mailOptions)
    .then((response) => {
      res.status(200).json({ Successfully: response.messageId });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json("Something went wrong... Internal Server Error");
    });
};

export const otpVerify = (req, res) => {
  const data = req.body;
  const OTP = data.otp;
  const oTp = randomNum;
  if (OTP == oTp) {
    res.status(200).json("User Verify");
  } else {
    return res.status(400).json({ message: "Invalid credentials" });
  }
};
