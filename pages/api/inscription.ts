import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

import type { InsData } from "@/libs/types/inscriptionData";
import getDataHtml from "@/libs/getDataHtml";
import getEmailHtml from "@/libs/getEmailHtml";

const correoDomain = process.env.GMAIL_USER_SENDER;
const correo = process.env.GMAIL_USER;

const trans = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: correo,
    pass: process.env.GMAIL_PASS,
  },
});

export default async function inscription(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const insData: InsData = req.body;

    console.info(insData)

    trans.sendMail(
      {
        from: correoDomain,
        to: insData.email,
        subject: `Inscripción al evento de mararungye: ${insData.event}`,
        html: getEmailHtml(insData),
      },
      (err1, info1) => {
        if (err1) {
          console.error("Error al enviar el mensaje al participante: " + err1)
          res.status(200).json({ err: true });
        } else {
          trans.sendMail(
            {
              from: correo,
              to: correo,
              subject: `Detalles de inscripción`,
              html: getDataHtml(insData),
            },
            (err2, info2) => {
              if (err2) {
                console.error("Error al enviar el mensaje a administración : " + err2)
                res.status(200).json({ err: true });
              } else {
                res.status(200).json({
                  err: false,
                  info: {
                    info1,
                    info2,
                  },
                });
              }
            }
          );
        }
      }
    );
  } else if (req.method === "GET") {
    res.status(200).json({ status: "ok" });
  }
}
