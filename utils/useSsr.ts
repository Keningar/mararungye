import React from "react";

function isDOM() {
  return (
    typeof window !== "undefined" &&
    !!window.document &&
    !!window.document.documentElement
  );
}

function useSsr() {
  const [isBrowser, setIsBrowser] = React.useState(isDOM);

  React.useEffect(() => {
    setIsBrowser(isDOM);
  }, []);

  return {
    isBrowser,
    isServer: !isBrowser,
  };
}

export default useSsr;
