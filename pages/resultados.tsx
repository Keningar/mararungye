import React from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EventTable from "@/components/Shared/Entity/Event/EventTable";
import ResultTables from "@/components/Shared/Entity/Result/ResultTables";

import { BiArrowBack } from "react-icons/bi";

const A_Header = {
  out: { left: -100, opacity: 0 },
  in: { left: 0, opacity: 1 },
};

const Test: NextPage = () => {
  const router = useRouter();
  const { evento } = router.query;
  const event = evento as string | undefined;

  return (
    <div className='min-h-screen bg-stone-50'>
      <div className='max-w-7xl mx-auto'>
        <Navbar />
      </div>

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
            <h1 className='text-4xl font-extrabold tracking-tight text-stone-900 sm:text-5xl lg:text-5xl'>
              Resultados
            </h1>
          </motion.div>
        </div>
      </div>

      <main className='overflow-hidden max-w-6xl mx-auto'>
        {!event ? (
          <EventTable
            onRowClick={_ => {
              router.push(`?evento=${_.id}`, undefined, { shallow: true });
            }}
          />
        ) : (
          <>
            <button
              className='w-fit p-2 cursor-pointer rounded-lg mb-4 flex hover:bg-gray-200'
              onClick={router.back}
            >
              <BiArrowBack className='w-6 h-6 mr-2' />
              <span className='text-black'>Regresar</span>
            </button>
            <ResultTables eventId={event} />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Test;
