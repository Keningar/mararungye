import React from "react";

import type { InsData } from "@/libs/types/inscriptionData";
import getDataHtml from "@/libs/getDataHtml";
import getEmailHtml from "@/libs/getEmailHtml";

// mararungye@gmail.com - 0969866519 - ygpdvvgievgffzmk
// kenencalada@gmail.com - yoxvrfdwaipfckao

const isDevelop = process.env.NODE_ENV == "development";
const correoDomain = isDevelop
  ? "kenencalada@gmail.com"
  : "tech@mararungye.com";
const correo = isDevelop ? "kenencalada@gmail.com" : "mararungye@gmail.com";

export async function sendData(insData: InsData) {
  const nodemailer = (await import("nodemailer")).default;
  if (!nodemailer) throw new Error("Cannot get nodemailer");
  const trans = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: correo,
      pass: isDevelop ? "yoxvrfdwaipfckao" : "ygpdvvgievgffzmk",
    },
  });
  if (!trans) throw new Error("Cannot instanciate nodemailer");

  const clientMail = await trans.sendMail({
    from: correoDomain,
    to: insData.email,
    subject: `Inscripción al evento de mararungye: ${insData.event}`,
    html: getEmailHtml(insData),
  });
  const ownersMail = await trans.sendMail({
    from: correo,
    to: correo,
    subject: `Detalles de inscripción`,
    html: getDataHtml(insData),
  });
  return {
    clientMail,
    ownersMail,
  };
}

/*
export function useNodemailer() {
  const [trans, setTrans] = React.useState<any>(null);

  React.useEffect(() => {
    const nodemailer = require("nodemailer");
    setTrans(
      nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: correo,
          pass: isDevelop ? "yoxvrfdwaipfckao" : "ygpdvvgievgffzmk",
        },
      })
    );
  }, []);

  const sendData = async (insData: InsData) => {
    if (trans) {
      const clientMail = await trans.sendMail({
        from: correoDomain,
        to: insData.email,
        subject: `Inscripción al evento de mararungye: ${insData.event}`,
        html: getEmailHtml(insData),
      });
      const ownersMail = await trans.sendMail({
        from: correo,
        to: correo,
        subject: `Detalles de inscripción`,
        html: getDataHtml(insData),
      });
      return {
        clientMail,
        ownersMail,
      };
    }
  };
  return sendData;
}
*/
