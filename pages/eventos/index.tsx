import type { NextPage } from "next";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import DB_Eventos from "@/DB/eventos.json";

const A_header = {
  first: {
    out: {
      bottom: -16,
      opacity: 0,
    },
    in: { bottom: 0, opacity: 1 },
  },
  second: {
    out: {
      bottom: -42,
      opacity: 0,
    },
    in: { bottom: 0, opacity: 1 },
  },
};
const A_overlay = {
  hover: {
    transform: "scale(1)",
  },
};
const A_image = {
  animate: {
    transform: "scale(1)",
  },
  hover: {
    transform: "scale(1.3)",
  },
};

const Eventos: NextPage = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-7xl mx-auto">
        <Navbar />
      </div>

      {/* Header Title */}
      <div className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto pl-4 pr-8 sm:px-6 lg:px-8">
          <h1 className="font-extrabold tracking-tight text-gray-900 text-4xl lg:text-5xl">
            <motion.span
              className="relative block"
              variants={A_header.first}
              initial="out"
              animate="in"
              transition={{
                duration: 0.2,
              }}
            >
              NUESTROS PRÓXIMOS
            </motion.span>
            <motion.span
              className="relative block text-indigo-600"
              variants={A_header.second}
              initial="out"
              animate="in"
              transition={{
                duration: 1.2,
                ease: "easeOut",
              }}
            >
              EVENTOS
            </motion.span>
          </h1>
        </div>
      </div>

      {/* Events Cards */}
      <div className="pb-16">
        <div className="mx-auto max-w-xs sm:max-w-7xl">
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 sm:px-6 md:grid-cols-3 lg:grid-cols-4 lg:px-8">
            {DB_Eventos.map((_, i) => (
              <Link key={_.id} href={`/eventos/${_.id}`}>
                <motion.div
                  className="relative z-10 h-60 overflow-hidden rounded-xl p-4 drop-shadow-sm cursor-pointer"
                  animate="animate"
                  whileHover="hover"
                >
                  {/* Background */}
                  <motion.div
                    layoutId={`id-${_.id}`}
                    className="absolute inset-0"
                    variants={A_image}
                  >
                    <Image
                      src={_.img.cover}
                      layout="fill"
                      objectFit="cover"
                      draggable={false}
                    />
                  </motion.div>

                  {/* Date */}
                  <div className="absolute top-4 left-4 bg-white rounded-xl drop-shadow-sm w-12 h-14 overflow-hidden text-center">
                    <div className="w-full h-1/2 pt-1">
                      <span className="text-md font-bold text-indigo-500">
                        {_.fecha.dia}
                      </span>
                    </div>
                    <div className="w-full h-1/2 bg-indigo-100">
                      <span className="text-xs font-semibold text-indigo-500 uppercase">
                        {_.fecha.mes.slice(0, 3)}
                      </span>
                    </div>
                  </div>

                  {/* Name */}
                  <div className="absolute w-4/5 rounded-tr-full left-0 bottom-0 p-2 pl-4 bg-indigo-500">
                    <h2 className="text-lg font-semibold text-white">
                      {_.name}
                    </h2>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Eventos;
