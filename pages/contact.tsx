import type { NextPage } from "next";
import React from "react";
import { PhoneIcon } from "@heroicons/react/outline";
import { ExternalLinkIcon } from "@heroicons/react/solid";
import { motion, Variants } from "framer-motion";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import redesSociales from "@/const/redesSociales";
import { useIsLarge } from "@/utils/useMediaQuery";

import OficinasDB from "@/DB/oficinas.json";

const one_third_percent = `${(1 / 3) * 100}%`;
const two_thirds_percent = `${(2 / 3) * 100}%`;

const A_Header = {
  out: { left: -100, opacity: 0 },
  in: { left: 0, opacity: 1 },
};
const A_Contact: { info: Variants; form: Variants } = {
  info: {
    out: {
      width: one_third_percent,
      left: "50%",
      transform: "translateX(-50%)",
    },
    in: { width: one_third_percent, left: "2rem", transform: "translateX(0%)" },
    lg: {
      width: "100%",
      left: "2rem",
      transform: "translateX(0%)",
    },
  },
  form: {
    out: {
      width: two_thirds_percent,
      left: "0%",
      transform: "translateX(0%)",
      opacity: 0,
    },
    in: {
      width: two_thirds_percent,
      left: "100%",
      transform: "translateX(-100%)",
      opacity: 1,
      transition: {
        duration: 0.8,
        opacity: {
          duration: (0.8 * 4) / 5,
          delay: (0.8 * 1) / 5,
        },
      },
    },
    lg: {
      width: "100%",
      left: "100%",
      transform: "translateX(-100%)",
      opacity: 1,
    },
  },
};

const ContactSection = (
  <section className='relative bg-stone-50' aria-labelledby='contact-heading'>
    <div className='absolute w-full h-1/2 bg-stone-50' aria-hidden='true' />
    <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='relative bg-white shadow-xl'>
        <h2 id='contact-heading' className='sr-only'>
          Contact us
        </h2>

        <div className='grid grid-cols-1 lg:grid-cols-3'>
          {/* Contact information */}
          <motion.div
            className='relative overflow-hidden py-10 px-6 bg-gradient-to-b from-indigo-500 to-indigo-600 sm:px-10 xl:p-12'
            initial={{ gridColumnStart: 2 }}
            animate={{ gridColumnStart: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Decorative angle backgrounds */}
            <div
              className='absolute inset-0 pointer-events-none sm:hidden'
              aria-hidden='true'
            >
              <svg
                className='absolute inset-0 w-full h-full'
                width={343}
                height={388}
                viewBox='0 0 343 388'
                fill='none'
                preserveAspectRatio='xMidYMid slice'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z'
                  fill='url(#linear1)'
                  fillOpacity='.1'
                />
                <defs>
                  <linearGradient
                    id='linear1'
                    x1='254.553'
                    y1='107.554'
                    x2='961.66'
                    y2='814.66'
                    gradientUnits='userSpaceOnUse'
                  >
                    <stop stopColor='#fff' />
                    <stop offset={1} stopColor='#fff' stopOpacity={0} />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div
              className='hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden'
              aria-hidden='true'
            >
              <svg
                className='absolute inset-0 w-full h-full'
                width={359}
                height={339}
                viewBox='0 0 359 339'
                fill='none'
                preserveAspectRatio='xMidYMid slice'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z'
                  fill='url(#linear2)'
                  fillOpacity='.1'
                />
                <defs>
                  <linearGradient
                    id='linear2'
                    x1='192.553'
                    y1='28.553'
                    x2='899.66'
                    y2='735.66'
                    gradientUnits='userSpaceOnUse'
                  >
                    <stop stopColor='#fff' />
                    <stop offset={1} stopColor='#fff' stopOpacity={0} />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div
              className='hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block'
              aria-hidden='true'
            >
              <svg
                className='absolute inset-0 w-full h-full'
                width={160}
                height={678}
                viewBox='0 0 160 678'
                fill='none'
                preserveAspectRatio='xMidYMid slice'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z'
                  fill='url(#linear3)'
                  fillOpacity='.1'
                />
                <defs>
                  <linearGradient
                    id='linear3'
                    x1='192.553'
                    y1='325.553'
                    x2='899.66'
                    y2='1032.66'
                    gradientUnits='userSpaceOnUse'
                  >
                    <stop stopColor='#fff' />
                    <stop offset={1} stopColor='#fff' stopOpacity={0} />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h3 className='text-lg font-medium text-white'>
              Información de contacto
            </h3>
            <p className='mt-6 text-base text-indigo-50 max-w-3xl'>
              También pude comunicarse con nosotros a través de nuestros números
              telefónicos o redes sociales
            </p>
            <dl className='mt-8 space-y-6'>
              {["(04)5002771", "0967250231", "0960760637"].map((_, i) => (
                <React.Fragment key={_}>
                  <dt>
                    <span className='sr-only'>Numero de telefono {i + 1}</span>
                  </dt>
                  <dd className='flex text-base text-indigo-50'>
                    <PhoneIcon
                      className='flex-shrink-0 w-6 h-6 text-indigo-200'
                      aria-hidden='true'
                    />
                    <span className='ml-3'>+593 {_}</span>
                  </dd>
                </React.Fragment>
              ))}
              {/* <dt>
                      <span className="sr-only">Email</span>
                    </dt>
                    <dd className="flex text-base text-indigo-50">
                      <MailIcon
                        className="flex-shrink-0 w-6 h-6 text-indigo-200"
                        aria-hidden="true"
                      />
                      <span className="ml-3">support@workcation.com</span>
                    </dd> */}
            </dl>
            <ul role='list' className='mt-8 flex space-x-12'>
              {redesSociales.map(_ => (
                <li key={_.name}>
                  <a
                    className='text-indigo-200 hover:text-indigo-100'
                    href={_.href}
                  >
                    <span className='sr-only'>{_.name}</span>
                    <_.icon className='h-6 w-6' aria-hidden='true' />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact form */}
          <div className='py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12'>
            <h3 className='text-lg font-medium text-stone-900'>
              Envíenos un mensaje
            </h3>
            <form
              action='#'
              method='POST'
              className='mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8'
            >
              <div>
                <label
                  htmlFor='first-name'
                  className='block text-sm font-medium text-stone-900'
                >
                  Primer nombre
                </label>
                <div className='mt-1'>
                  <input
                    type='text'
                    name='first-name'
                    id='first-name'
                    autoComplete='given-name'
                    className='py-3 px-4 block w-full shadow-sm text-stone-900 focus:ring-indigo-500 focus:border-indigo-500 border-stone-300 rounded-md'
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor='last-name'
                  className='block text-sm font-medium text-stone-900'
                >
                  Segundo nombre
                </label>
                <div className='mt-1'>
                  <input
                    type='text'
                    name='last-name'
                    id='last-name'
                    autoComplete='family-name'
                    className='py-3 px-4 block w-full shadow-sm text-stone-900 focus:ring-indigo-500 focus:border-indigo-500 border-stone-300 rounded-md'
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-medium text-stone-900'
                >
                  Correo
                </label>
                <div className='mt-1'>
                  <input
                    id='email'
                    name='email'
                    type='email'
                    autoComplete='email'
                    className='py-3 px-4 block w-full shadow-sm text-stone-900 focus:ring-indigo-500 focus:border-indigo-500 border-stone-300 rounded-md'
                  />
                </div>
              </div>
              <div>
                <div className='flex justify-between'>
                  <label
                    htmlFor='phone'
                    className='block text-sm font-medium text-stone-900'
                  >
                    Teléfono
                  </label>
                  <span id='phone-optional' className='text-sm text-stone-500'>
                    Opcional
                  </span>
                </div>
                <div className='mt-1'>
                  <input
                    type='text'
                    name='phone'
                    id='phone'
                    autoComplete='tel'
                    className='py-3 px-4 block w-full shadow-sm text-stone-900 focus:ring-indigo-500 focus:border-indigo-500 border-stone-300 rounded-md'
                    aria-describedby='phone-optional'
                  />
                </div>
              </div>
              <div className='sm:col-span-2'>
                <label
                  htmlFor='subject'
                  className='block text-sm font-medium text-stone-900'
                >
                  Asunto
                </label>
                <div className='mt-1'>
                  <input
                    type='text'
                    name='subject'
                    id='subject'
                    className='py-3 px-4 block w-full shadow-sm text-stone-900 focus:ring-indigo-500 focus:border-indigo-500 border-stone-300 rounded-md'
                  />
                </div>
              </div>
              <div className='sm:col-span-2'>
                <div className='flex justify-between'>
                  <label
                    htmlFor='message'
                    className='block text-sm font-medium text-stone-900'
                  >
                    Mensaje
                  </label>
                  <span id='message-max' className='text-sm text-stone-500'>
                    Max. 500 letras
                  </span>
                </div>
                <div className='mt-1'>
                  <textarea
                    id='message'
                    name='message'
                    rows={4}
                    className='py-3 px-4 block w-full shadow-sm text-stone-900 focus:ring-indigo-500 focus:border-indigo-500 border border-stone-300 rounded-md'
                    aria-describedby='message-max'
                    defaultValue={""}
                  />
                </div>
              </div>
              <div className='sm:col-span-2 sm:flex sm:justify-end'>
                <button
                  type='submit'
                  className='mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto'
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Contact: NextPage = () => {
  const isLarge = useIsLarge();

  return (
    <div className='min-h-screen bg-stone-50'>
      <div className='max-w-7xl mx-auto'>
        <Navbar />
      </div>

      <main className='overflow-hidden'>
        {/* Header */}
        <div className='bg-stone-50'>
          <div className='py-24 lg:py-32'>
            <motion.div
              className='relative z-10 max-w-7xl mx-auto pl-4 pr-8 sm:px-6 lg:px-8'
              variants={A_Header}
              initial='out'
              animate='in'
              exit='out'
            >
              <h1 className='text-4xl font-extrabold tracking-tight text-stone-900 sm:text-5xl lg:text-6xl'>
                Ponerse en contacto
              </h1>
              <p className='mt-6 text-xl text-stone-500 max-w-3xl'>
                Puede enviarnos un mensaje, o sus dudas con la ayuda del
                siguiente formulario.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Contact section */}
        <div className='relative max-w-7xl m-auto px-4 sm:px-6 lg:px-8'>
          {/* Contact information */}
          <motion.div
            className='h-full lg:absolute lg:w-1/3 lg:z-10 overflow-hidden py-10 px-6 bg-gradient-to-b from-indigo-500 to-indigo-600 sm:px-10 xl:p-12'
            variants={A_Contact.info}
            initial={isLarge ? "out" : "lg"}
            animate={isLarge ? "in" : "lg"}
            transition={{
              ease: "easeOut",
              duration: 0.8,
            }}
          >
            {/* Decorative angle backgrounds */}
            <div
              className='absolute inset-0 pointer-events-none sm:hidden'
              aria-hidden='true'
            >
              <svg
                className='absolute inset-0 w-full h-full'
                width={343}
                height={388}
                viewBox='0 0 343 388'
                fill='none'
                preserveAspectRatio='xMidYMid slice'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z'
                  fill='url(#linear1)'
                  fillOpacity='.1'
                />
                <defs>
                  <linearGradient
                    id='linear1'
                    x1='254.553'
                    y1='107.554'
                    x2='961.66'
                    y2='814.66'
                    gradientUnits='userSpaceOnUse'
                  >
                    <stop stopColor='#fff' />
                    <stop offset={1} stopColor='#fff' stopOpacity={0} />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div
              className='hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden'
              aria-hidden='true'
            >
              <svg
                className='absolute inset-0 w-full h-full'
                width={359}
                height={339}
                viewBox='0 0 359 339'
                fill='none'
                preserveAspectRatio='xMidYMid slice'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z'
                  fill='url(#linear2)'
                  fillOpacity='.1'
                />
                <defs>
                  <linearGradient
                    id='linear2'
                    x1='192.553'
                    y1='28.553'
                    x2='899.66'
                    y2='735.66'
                    gradientUnits='userSpaceOnUse'
                  >
                    <stop stopColor='#fff' />
                    <stop offset={1} stopColor='#fff' stopOpacity={0} />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div
              className='hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block'
              aria-hidden='true'
            >
              <svg
                className='absolute inset-0 w-full h-full'
                width={160}
                height={678}
                viewBox='0 0 160 678'
                fill='none'
                preserveAspectRatio='xMidYMid slice'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z'
                  fill='url(#linear3)'
                  fillOpacity='.1'
                />
                <defs>
                  <linearGradient
                    id='linear3'
                    x1='192.553'
                    y1='325.553'
                    x2='899.66'
                    y2='1032.66'
                    gradientUnits='userSpaceOnUse'
                  >
                    <stop stopColor='#fff' />
                    <stop offset={1} stopColor='#fff' stopOpacity={0} />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h3 className='text-lg font-medium text-white'>
              Información de contacto
            </h3>
            <p className='mt-6 text-base text-indigo-50 max-w-3xl'>
              También pude comunicarse con nosotros a través de nuestros números
              telefónicos o redes sociales
            </p>
            <dl className='mt-8 space-y-6'>
              {["(04)5002771", "0967250231", "0960760637"].map((_, i) => (
                <React.Fragment key={_}>
                  <dt>
                    <span className='sr-only'>Numero de telefono {i + 1}</span>
                  </dt>
                  <dd className='flex text-base text-indigo-50'>
                    <PhoneIcon
                      className='flex-shrink-0 w-6 h-6 text-indigo-200'
                      aria-hidden='true'
                    />
                    <span className='ml-3'>+593 {_}</span>
                  </dd>
                </React.Fragment>
              ))}
              {/* <dt>
                      <span className="sr-only">Email</span>
                    </dt>
                    <dd className="flex text-base text-indigo-50">
                      <MailIcon
                        className="flex-shrink-0 w-6 h-6 text-indigo-200"
                        aria-hidden="true"
                      />
                      <span className="ml-3">support@workcation.com</span>
                    </dd> */}
            </dl>
            <ul role='list' className='mt-8 flex space-x-12'>
              {redesSociales.map(_ => (
                <li key={_.name}>
                  <a
                    className='text-indigo-200 hover:text-indigo-100'
                    href={_.href}
                  >
                    <span className='sr-only'>{_.name}</span>
                    <_.icon className='h-6 w-6' aria-hidden='true' />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            className='relative'
            variants={A_Contact.form}
            initial={isLarge ? "out" : "lg"}
            animate={isLarge ? "in" : "lg"}
            transition={{
              ease: "easeOut",
              duration: 0.8,
            }}
          >
            <div className='relative bg-white shadow-xl'>
              <h2 id='contact-heading' className='sr-only'>
                Contact us
              </h2>
              {/* Contact form */}
              <div className='py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12'>
                <h3 className='text-lg font-medium text-stone-900'>
                  Envíenos un mensaje
                </h3>
                <form
                  action='#'
                  method='POST'
                  className='mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8'
                >
                  <div>
                    <label
                      htmlFor='first-name'
                      className='block text-sm font-medium text-stone-900'
                    >
                      Primer nombre
                    </label>
                    <div className='mt-1'>
                      <input
                        type='text'
                        name='first-name'
                        id='first-name'
                        autoComplete='given-name'
                        className='py-3 px-4 block w-full shadow-sm text-stone-900 focus:ring-indigo-500 focus:border-indigo-500 border-stone-300 rounded-md'
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor='last-name'
                      className='block text-sm font-medium text-stone-900'
                    >
                      Segundo nombre
                    </label>
                    <div className='mt-1'>
                      <input
                        type='text'
                        name='last-name'
                        id='last-name'
                        autoComplete='family-name'
                        className='py-3 px-4 block w-full shadow-sm text-stone-900 focus:ring-indigo-500 focus:border-indigo-500 border-stone-300 rounded-md'
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor='email'
                      className='block text-sm font-medium text-stone-900'
                    >
                      Correo
                    </label>
                    <div className='mt-1'>
                      <input
                        id='email'
                        name='email'
                        type='email'
                        autoComplete='email'
                        className='py-3 px-4 block w-full shadow-sm text-stone-900 focus:ring-indigo-500 focus:border-indigo-500 border-stone-300 rounded-md'
                      />
                    </div>
                  </div>
                  <div>
                    <div className='flex justify-between'>
                      <label
                        htmlFor='phone'
                        className='block text-sm font-medium text-stone-900'
                      >
                        Teléfono
                      </label>
                      <span
                        id='phone-optional'
                        className='text-sm text-stone-500'
                      >
                        Opcional
                      </span>
                    </div>
                    <div className='mt-1'>
                      <input
                        type='text'
                        name='phone'
                        id='phone'
                        autoComplete='tel'
                        className='py-3 px-4 block w-full shadow-sm text-stone-900 focus:ring-indigo-500 focus:border-indigo-500 border-stone-300 rounded-md'
                        aria-describedby='phone-optional'
                      />
                    </div>
                  </div>
                  <div className='sm:col-span-2'>
                    <label
                      htmlFor='subject'
                      className='block text-sm font-medium text-stone-900'
                    >
                      Asunto
                    </label>
                    <div className='mt-1'>
                      <input
                        type='text'
                        name='subject'
                        id='subject'
                        className='py-3 px-4 block w-full shadow-sm text-stone-900 focus:ring-indigo-500 focus:border-indigo-500 border-stone-300 rounded-md'
                      />
                    </div>
                  </div>
                  <div className='sm:col-span-2'>
                    <div className='flex justify-between'>
                      <label
                        htmlFor='message'
                        className='block text-sm font-medium text-stone-900'
                      >
                        Mensaje
                      </label>
                      <span id='message-max' className='text-sm text-stone-500'>
                        Max. 500 letras
                      </span>
                    </div>
                    <div className='mt-1'>
                      <textarea
                        id='message'
                        name='message'
                        rows={4}
                        className='py-3 px-4 block w-full shadow-sm text-stone-900 focus:ring-indigo-500 focus:border-indigo-500 border border-stone-300 rounded-md'
                        aria-describedby='message-max'
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className='sm:col-span-2 sm:flex sm:justify-end'>
                    <button
                      type='submit'
                      className='mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto'
                    >
                      Enviar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Contact grid */}
        <section aria-labelledby='offices-heading' className='mt-16'>
          <div className='max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8'>
            <h2
              id='offices-heading'
              className='text-3xl font-extrabold text-stone-900'
            >
              Nuestras oficinas
            </h2>
            <p className='mt-6 text-lg text-stone-500 max-w-3xl'>
              Puede encontrarnos en las siguientes ubicaciones.
            </p>
            <div className='mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4'>
              {OficinasDB.map((office, i) => (
                <div key={`oficina-${i}`}>
                  <h3 className='text-lg font-medium text-stone-900'>
                    {office.city}
                  </h3>
                  <p className='mt-2 text-base text-stone-500'>
                    {office.address.map(line => (
                      <span key={line} className='block'>
                        {line}
                      </span>
                    ))}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
