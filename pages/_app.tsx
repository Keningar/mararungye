import '../styles/globals.css'
import type { AppLayoutProps } from 'next/app'

import React from 'react';
import { getLayout as deafultGetLayout } from "@/components/layouts/DefaultLayout";

// const deafultGetLayout = (Component: any) => Component;

function MyApp({ Component, pageProps }: AppLayoutProps) {
  const getLayout: React.GetLayout = Component.getLayout || deafultGetLayout;

  React.useEffect(() => {
    // Handler to call on window resize
    const handleResize = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return getLayout(<Component {...pageProps} />, pageProps.layoutProps)
}

export default MyApp
