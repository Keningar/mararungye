import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

import type { InsData } from "@/libs/types/inscriptionData";
import getDataHtml from "@/libs/getDataHtml";
import getEmailHtml from "@/libs/getEmailHtml";

// carmu.1292@gmail.com - 093054sultanamore - dmjdukanhcagmhif
// kenencalada@gmail.com - yoxvrfdwaipfckao

const isDevelop = process.env.NODE_ENV == "development";
const correoDomain = isDevelop
  ? "kenencalada@gmail.com"
  : "tech@mararungye.com";
const correo = isDevelop ? "kenencalada@gmail.com" : "carmu.1292@gmail.com";

const trans = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: correo,
    pass: isDevelop ? "yoxvrfdwaipfckao" : "dmjdukanhcagmhif",
  },
});

const mockInsData: any = {
  address: "villa bonita mz 5049",
  age: "22",
  ci: "12345",
  birthday: new Date(),
  city: "guayaquil",
  country: "ecuador",
  email: "kenth.principal.cloud@gmail.com",
  event: "Locos x ",
  firstName: "kenth",
  secondName: "enrique",
  lastName: "encalada",
  secondLastName: "sdsdsd",
  phone: "0909090909",
  sex: "Hombre",
};

export default async function inscription(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const insData: InsData = req.body;

    console.log(insData)

    trans.sendMail(
      {
        from: correoDomain,
        to: insData.email,
        subject: `Inscripción al evento de mararungye: ${insData.event}`,
        html: getEmailHtml(insData),
      },
      (err1, info1) => {
        if (err1) {
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
