import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

const trans = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "kenencalada@gmail.com",
    pass: "yoxvrfdwaipfckao",
  },
});

export default function email(req: NextApiRequest, res: NextApiResponse) {
  trans.sendMail(
    {
      from: "kenencalada@gmail.com",
      to: "kenth.principal.cloud@gmail.com",
      subject: "NodeMailer Test",
      html: "Hola",
    },
    (err, info) => {
      console.log({ err, info });
    }
  );
  res.status(200).json({ mess: "ok" });
}
