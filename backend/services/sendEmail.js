const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function sendEmail(body) {
  console.log("mail sent", body);
  // try {
  //   let transporter = nodemailer.createTransport({
  //     host: "smtp.meta.ua",
  //     port: 465,
  //     secure: true, // true for 465, false for other ports
  //     auth: {
  //       user: process.env.USER_EMAIL, // generated ethereal user
  //       pass: process.env.USER_EMAIL_PASS, // generated ethereal password
  //     },
  //   });

  //   const { userEmail, userName, userText } = body;

  //   const emailMSG = `
  // <h1>Доброго дня</h1>
  //   <p>Вам прийшов лист від ${userName} з емаил ${userEmail}</p>
  //   <p>Текст повідомлення ${userText}</p>`;

  //   const emailOptions = {
  //     from: "підставити свою пошту", // sender address
  //     to: "alekz@gmail.com", // list of receivers
  //     subject: "Важливі новини", // Subject line
  //     text: "Дядя залишив спадщіну", // plain text body
  //     html: emailMSG, // html body
  //   };

  //   let info = await transporter.sendMail(emailOptions);

  //   console.log("Message sent: %s", info.messageId);

  //   console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  //   return true;
  // } catch (error) {
  //   console.log(error.message);
  // }
}

module.exports = sendEmail;
