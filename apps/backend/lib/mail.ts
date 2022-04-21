import nodemailer from 'nodemailer'

class MailService {
  static templateEmail(text: string): string {
    return `
     <div styles="
      border: 1px solid black;
      padding: 20px;
      font-family: sans-serif;
      line-height: 2;
      font-size: 20px;
     ">
      <h2>Hello there,</h2>
      <p>${text}</p>
      <p>👍, Sick Fits team </p>
    </div>
    `
  }

  static async sendMail(resetToken: string, to: string) {
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: parseInt(process.env.MAIL_PORT),
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    })

    await transporter.sendMail({
      to,
      from: 'team@sickfits.com',
      subject: 'Your password reset token',
      html: this.templateEmail(`Your password reset token is here! 
      
      <a href="${process.env.FRONTEND_URL}/reset?token=${resetToken}">Click Here to reset</a>
      `),
    }, (error, info) => {

      console.log(nodemailer.getTestMessageUrl(info))
    })

  }
}

export default MailService
