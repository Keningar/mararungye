import type { NextPage } from "next";
import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import Link from "next/link";
import clsx from "clsx";

import {
  ClockIcon,
  LocationMarkerIcon,
  CurrencyDollarIcon,
  InformationCircleIcon,
  ArrowCircleLeftIcon as ArrowCircleLeftIconOutline,
} from "@heroicons/react/outline";
import { ArrowCircleLeftIcon as ArrowCircleLeftIconSolid } from "@heroicons/react/solid";

import Footer from "@/components/Footer";
import useOnScrollPosition from "@/utils/useOnScrollPosition";
import { useIsLarge } from "@/utils/useMediaQuery";
import StringUtils from "@/utils/StringUtils";

import { EventsStore } from "@/stores/eventsStore";
import DB_Eventos from "@/DB/eventos.json";

const Evento: NextPage = () => {
  const {
    query: { id },
    push: routerPush,
  } = useRouter();
  const { scrollYProgress } = useViewportScroll();
  const final_des_y = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const reachPosition = useOnScrollPosition(316);
  const isLarge = useIsLarge();

  const changeSelectedEvent = EventsStore.useChangeSelectedEvent();

  const arrowProps = {
    className: "w-8 h-8",
  };

  const evento = DB_Eventos.find(_ => _.id == id);

  return (
    <div
      className={clsx(
        "min-h-screen",
        evento ? "lg:bg-stone-50" : "bg-stone-100"
      )}
    >
      <motion.div className='fixed top-6 left-6 z-10'>
        <Link href='/eventos'>
          <a>
            {reachPosition && !isLarge ? (
              <ArrowCircleLeftIconSolid {...arrowProps} />
            ) : (
              <ArrowCircleLeftIconOutline {...arrowProps} />
            )}
          </a>
        </Link>
      </motion.div>

      {/* Fix white space on top */}
      <div className={evento && "h-0 lg:h-1"} />

      {!evento ? (
        <div className='h-screen flex flex-col'>
          <div className='grow flex justify-center items-center text-center'>
            <div>
              <h1 className='block font-semibold tracking-wider text-gray-900 text-3xl sm:text-4xl md:text-5xl'>
                NO EXISTE EL EVENTO
              </h1>
            </div>
          </div>
          <Footer className='mt-8' />
        </div>
      ) : (
        <>
          <div className='overflow-hidden mx-auto lg:drop-shadow-xl lg:rounded-3xl lg:mt-20 lg:max-w-4xl xl:max-w-6xl'>
            <motion.div
              layoutId={`id-${evento.id}`}
              className='fixed w-full h-96 lg:relative'
              style={{ y: isLarge ? 0 : final_des_y }}
            >
              <Image
                src={evento.img}
                layout='fill'
                objectFit='cover'
                draggable={false}
              />
            </motion.div>

            <div className='bg-white relative py-6 px-10 -top-5 mt-96 rounded-t-3xl lg:rounded-none lg:top-0 lg:mt-0'>
              <div className='flex justify-between items-center'>
                <h1 className='font-bold text-gray-900 text-4xl'>
                  {evento.name}
                </h1>
                <span className='text-indigo-600 font-bold text-3xl lg:hidden'>
                  {`$${evento.precios.adultos}`}
                </span>
              </div>

              {/* Sub info */}
              <div className='flex justify-between items-center'>
                <dl className='my-6 space-y-2 w-full flex justify-between lg:block lg:w-fit'>
                  {[
                    {
                      name: "Fecha",
                      icon: (
                        <ClockIcon
                          className='flex-shrink-0 w-6 h-6'
                          aria-hidden='true'
                        />
                      ),
                      value: `${StringUtils.setWord(evento.fecha.mes)
                        .capitalize()
                        .getWord()} ${evento.fecha.dia}, ${evento.fecha.año} ${
                        evento.fecha.hora
                      }`,
                    },
                    {
                      name: "Lugar",
                      icon: (
                        <LocationMarkerIcon
                          className='flex-shrink-0 w-6 h-6'
                          aria-hidden='true'
                        />
                      ),
                      value: `${StringUtils.setWord(evento.lugar.ciudad)
                        .capitalize()
                        .getWord()}, ${evento.lugar.direccion}`,
                    },
                    {
                      name: "Precio",
                      icon: (
                        <CurrencyDollarIcon
                          className='flex-shrink-0 w-6 h-6'
                          aria-hidden='true'
                        />
                      ),
                      value: `$${evento.precios.adultos} adultos $${evento.precios.niños} niños`,
                    },
                    {
                      name: "Distancia",
                      icon: (
                        <InformationCircleIcon
                          className='flex-shrink-0 w-6 h-6'
                          aria-hidden='true'
                        />
                      ),
                      value: evento.info,
                    },
                  ].map((_, i, arr) =>
                    i == 2 && !isLarge ? null : (
                      <React.Fragment key={_.name}>
                        <dt>
                          <span className='sr-only'>{_.name}</span>
                        </dt>
                        <dd
                          className={clsx(
                            "flex text-base flex-col items-center w-1/3 space-y-1 text-center lg:w-fit lg:flex-row lg:space-y-0",
                            i != arr.length - 1 && !isLarge && "border-r-2"
                          )}
                        >
                          {_.icon}
                          <span className='lg:ml-3'>{_.value}</span>
                        </dd>
                      </React.Fragment>
                    )
                  )}
                </dl>
                <div className='w-3/4 rounded-md shadow fixed left-1/2 bottom-6 -translate-x-1/2 lg:w-40 lg:relative lg:left-auto lg:bottom-auto lg:translate-x-0'>
                  <button
                    onClick={_ => {
                      changeSelectedEvent(evento.id);
                      routerPush("/inscripcion");
                    }}
                    className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10'
                  >
                    Inscribirse
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className='my-4'>
                <h2 className='font-semibold text-gray-900 text-xl mb-2'>
                  Descripción
                </h2>
                <div>{evento.descripcion}</div>
              </div>

              <Footer className='mb-8 lg:hidden' />
            </div>
          </div>
          <Footer className='mt-8 hidden lg:block' />
        </>
      )}
    </div>
  );
};

export default Evento;
