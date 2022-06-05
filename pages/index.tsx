import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Home: NextPage = () => {
  return (
    <div className="bg-stone-50">
      <Head>
        <title>MARARUNGYE</title>
      </Head>
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Hero Content */}
        <div className="max-w-7xl mx-auto lg:h-screen">
          <div className="relative z-10 pb-8 bg-stone-50 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:h-full lg:pb-28 xl:pb-32">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-stone-50 transform translate-x-1/2"
              fill="currentColor"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <Navbar />

            <main className="mt-28 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">NACIMOS PARA</span>
                  <span className="block text-indigo-600 xl:inline">
                    CORRER
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  UNETE Y SE PARTE DE NUESTRO EQUIPO
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <Link href="/contact">
                      <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                        Más Información
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        {/* Hero Image */}
        <div className="my-10 lg:m-0 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div className="relative bg-indigo-400 w-full h-96 sm:h-72 md:h-96 lg:h-full">
            <Image
              src="/hero_profile_2.jpg"
              layout="fill"
              className="object-cover object-[50%_65%]"
              draggable={false}
              alt=""
            />
          </div>
        </div>
      </div>
      {/* About Us Section */}
      <div className="relative my-5 max-w-7xl mx-auto lg:h-screen">
        <div className="relative h-96 md:absolute md:left-0 md:h-full md:w-1/2">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-5/6 w-5/12 md:w-3/4">
            {[
              [
                "https://static.wixstatic.com/media/a18606_62e1d7ef32fd4eceb617d247c89eb652~mv2.jpg/v1/fit/w_776,h_506,q_90/a18606_62e1d7ef32fd4eceb617d247c89eb652~mv2.jpg",
                "-left-2",
              ],
              ["/main_runner_3.jpeg", "-right-2"],
            ].map((_, i) => (
              <motion.img
                initial={{
                  opacity: 0,
                  [i == 0 ? "bottom" : "top"]: 50,
                }}
                whileInView={{
                  opacity: 1,
                  [i == 0 ? "bottom" : "top"]: 20,
                }}
                viewport={{ once: false }}
                transition={{ duration: 0.9 }}
                key={`about-img-${i}`}
                className={"absolute object-cover h-full w-1/2 " + _[1]}
                style={{
                  objectPosition: "40% 50%",
                }}
                draggable={false}
                src={_[0]}
                alt=""
              />
            ))}
          </div>
        </div>
        <div className=" w-full px-4 py-12 sm:px-6 md:px-8 lg:py-0 lg:h-full lg:flex lg:items-center lg:justify-end">
          <div className=" md:ml-auto md:pl-10 md:w-1/2">
            <h2 className="mt-2 text-black text-3xl font-extrabold tracking-tight sm:text-4xl">
              Sobre Nosotros
            </h2>
            <p className="mt-3 text-lg text-gray-900">
              Somos una marca dedicada a la Organización de carreras atléticas
              en el ECUADOR, dispuestos a realizar un trabajo de calidad,de la
              mano de profesionales de gran experiencia,Elaboración de
              camisetas,formando atletas(grupo MARATHON RUNNERS GYE), que con
              esfuerzo e ímpetu hemos logrado trascender competencias de FONDOS
              NACIONALES E INTERNACIONALES. Somos organizadores de la
              competencia LOCOS POR EL RUNNING 5K. SIEMPRE AVANTE 5K.
              ULTRAMARATHON DEL GUAYAS 60K.
            </p>
          </div>
        </div>
      </div>
      {/* Next Events Section */}
      <div className="my-20 max-w-7xl mx-auto">
        <h2 className="text-center tracking-tight font-bold text-gray-900 text-3xl sm:text-4xl md:text-5xl">
          <span className="block xl:inline uppercase">proximos eventos</span>
        </h2>
        <div className="mt-14 w-full flex justify-center flex-wrap">
          <div className="bg-indigo-400 w-80 h-80 px-2 flex justify-center items-center">
            <h3 className="uppercase text-2xl font-extrabold text-white">
              en planeación
            </h3>
          </div>
        </div>
      </div>
      {/* Sponsors Section */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <p className="text-center text-base font-semibold uppercase text-gray-600 tracking-wider">
          Gracias a la confianza de nuestros patrocinadores
        </p>
        <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-100">
            <span className="max-h-12 uppercase font-bold text-xl text-gray-400">
              flaquime
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
