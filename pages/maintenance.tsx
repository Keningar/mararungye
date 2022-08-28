import React from "react";
import Image from "next/image";

import Footer from "@/components/Footer";

import type { NextPage } from "next";

const Maintenance: NextPage = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <div className='max-w-2xl mx-auto mt-12 flex flex-col items-center flex-grow'>
        <div className='relative w-96 h-96'>
          <Image
            src='/maintenance.jpg'
            layout='fill'
            objectFit='cover'
            alt='Imagen de mantenimiento'
          />
        </div>
        <div className='text-sm text-gray-400'>
          <a
            href='https://www.freepik.com/free-vector/website-maintenance-abstract-concept-vector-illustration-website-service-webpage-seo-maintenance-web-design-corporate-site-professional-support-security-analysis-update-abstract-metaphor_11668822.htm#query=maintenance&position=3&from_view=keyword'
            className='hover:underline'
          >
            Image by vectorjuice
          </a>
          <span> on Freepik</span>
        </div>
        <div>
          <h1 className='text-2xl'>
            Estamos en mantenimiento, regresaremos pronto
          </h1>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Maintenance;
