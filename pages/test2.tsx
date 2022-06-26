import type { NextPage } from "next";
import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { motion } from "framer-motion";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Evento: NextPage = () => {
  
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="max-w-7xl mx-auto">
        <Navbar />
      </div>

      <div className="bg-indigo-200 rounded-3xl drop-shadow-md overflow-hidden lg:max-w-6xl min-h-96 mx-auto my-32">
        <motion.div layoutId={`id-${0}`} className="relative w-full h-96">
          <Image
            src="/mara2.jpg"
            layout="fill"
            objectFit="cover"
            draggable={false}
          />
        </motion.div>
        <div className="p-5">
          <h1 className="font-extrabold text-gray-900 text-4xl">Marathon 1</h1>
          <div className="pt-6">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              quis est sit amet leo vehicula vestibulum vitae at ipsum.
              Vestibulum non est a neque commodo blandit. Cras facilisis
              tristique suscipit. Quisque ultrices sem eget urna mattis, quis
              varius risus tincidunt. Morbi pellentesque nibh ac magna sagittis
              faucibus. Pellentesque sem nibh, auctor vitae elit non, vestibulum
              tincidunt felis. Nunc placerat congue purus, eget dictum diam
              facilisis a. Suspendisse potenti. Vivamus pellentesque vitae
              sapien quis semper. Aliquam erat volutpat.
            </p>
            <p>
              Duis iaculis lacus sed elit gravida iaculis. Ut vulputate massa ac
              metus pellentesque, ut laoreet felis iaculis. Vivamus urna nisi,
              viverra eu neque vel, vehicula egestas diam. Vestibulum metus
              risus, tristique at cursus a, viverra sed libero. Cras molestie
              eleifend ligula nec pellentesque. Cras a vulputate nisl, eget
              tristique mauris. Proin tincidunt eros quis eros malesuada, a
              sodales augue pellentesque. Mauris pulvinar ornare auctor.
            </p>
            <p>
              Cras euismod metus non ex consequat, sit amet scelerisque elit
              fermentum. Cras sodales dui non diam convallis, ultricies egestas
              lectus ornare. Phasellus varius fermentum odio, eget mollis turpis
              suscipit vitae. Vestibulum aliquet sapien sed vestibulum aliquam.
              Proin consequat tellus eget arcu imperdiet, vel posuere diam
              tempor. Cras semper sapien nunc, sed ornare erat mattis quis.
              Pellentesque blandit sit amet dolor fringilla lacinia. Ut quis
              maximus elit, elementum tempus nisl. Aliquam at sollicitudin
              purus. Donec magna felis, convallis et elit sit amet, cursus
              fringilla ante. Aliquam erat volutpat. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Integer eget varius arcu. Nullam
              euismod eros ut consequat tempus.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Evento;
