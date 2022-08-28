import "../styles/globals.css";

import type { AppLayoutProps } from "next/app";

import React from "react";
import { getLayout as deafultGetLayout } from "@/components/layouts/DefaultLayout";
import { AnimatePresence, AnimateSharedLayout } from "framer-motion";

// const deafultGetLayout = (Component: any) => Component;

function MyApp({ Component, pageProps, router }: AppLayoutProps) {
  const getLayout: React.GetLayout = Component.getLayout || deafultGetLayout;

  React.useEffect(() => {
    // Handler to call on window resize
    const handleResize = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  React.useEffect(() => {
    require('tw-elements')
  }, []);

  return getLayout(
    <AnimatePresence exitBeforeEnter>
      <AnimateSharedLayout>
        <Component {...pageProps} key={router.pathname} />
      </AnimateSharedLayout>
    </AnimatePresence>,
    pageProps.layoutProps
  );
}

export default MyApp;
