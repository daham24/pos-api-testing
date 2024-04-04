const userSchema = require("../model/UserSchema");
const bcrypt = require("bcrypt");
const salt = 10;
const nodemailer = require("nodemailer");

const register = (req, res) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "dpurubokka@gmail.com",
      pass: "owet tugi kjdy dgwd",
    },
  });

  const mailOption = {
    from: "dpurubokka@gmail.com",
    to: req.body.email,
    subject: "New Account Creation",
    text: "You Have Successfully Created Account!",
  };

  transporter.sendMail(mailOption, function (error, info) {
    if (error) {
      return res.status(500).json({ error: error });
    } else {
      return res.status(200).json({ information: info.response });
    }
  });

  // bcrypt.hash(req.body.password, salt, function (err, hash) {
  //   if (err) {
  //     return res.status(500).json(err);
  //   }
  //   const user = new userSchema({
  //     fullName: req.body.fullName,
  //     password: hash,
  //     email: req.body.email,
  //     activeState: req.body.activeState,
  //   });
  //   user
  //     .save()
  //     .then((saveResponse) => {
  //       return res.status(201).json({ message: "Saved!" });
  //     })
  //     .catch((error) => {
  //       return res.status(500).json(error);
  //     });
  // });
};

const login = (req, res) => {};

module.exports = {
  register,
  login,
};
