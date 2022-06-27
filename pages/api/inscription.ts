import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

import type { InsData } from '@/libs/types/inscriptionData';
import getDataHtml from '@/libs/getDataHtml';
import getEmailHtml from '@/libs/getEmailHtml';
import { AnyRecord } from 'dns';

// mararungye@gmail.com - 0969866519 - ygpdvvgievgffzmk
// kenencalada@gmail.com - yoxvrfdwaipfckao

const correoDomain = 'tech@mararungye.com';
const correo = 'mararungye@gmail.com';
const trans = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: correo,
    pass: 'ygpdvvgievgffzmk',
  },
});

const mockInsData: any = {
  address: 'villa bonita mz 5049',
  age: '22',
  ci: '12345',
  birthday: new Date(),
  city: 'guayaquil',
  country: 'ecuador',
  email: 'kenth.principal.cloud@gmail.com',
  event: 'Locos x ',
  firstName: 'kenth',
  secondName: 'enrique',
  lastName: 'encalada',
  secondLastName: 'sdsdsd',
  phone: '0909090909',
  sex: 'Hombre',
};

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const insData: InsData = req.body;

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
  } else if (req.method === 'GET') {
    /*
    trans.sendMail(
      {
        from: 'no-reply@mararungye.com',
        to: 'kenth.principal.cloud@gmail.com',
        subject: 'Test Look 6',
        html: getDataHtml(insData),
      },
      (err, info) => res.status(200).json({ err, info })
    );

    res.status(200);
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.write(
      fs.readFileSync(join(process.cwd(), 'const/email4.html'), 'utf-8')
    );
    res.end();
    */

    res.status(200).json({ status: 'ok' });
  }
};
