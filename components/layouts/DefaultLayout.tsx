import React from "react";
import StringUtils from "@/utils/StringUtils";

interface DefaultLayoutProps extends React.PropsWithChildren<{}> {}

const test1 = (
  <div>
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <a href="#">
            <span className="sr-only">Workflow</span>
            <img
              className="h-8 w-auto sm:h-10"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt=""
            />
          </a>
        </div>
        <div className="-mr-2 -my-2 md:hidden">
          <button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span className="sr-only">Open menu</span>
          </button>
        </div>

        <button className="text-gray-400 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Solutions
        </button>

        <a
          href="#"
          className="text-base font-medium text-gray-500 hover:text-gray-900"
        >
          Pricing
        </a>
        <a
          href="#"
          className="text-base font-medium text-gray-500 hover:text-gray-900"
        >
          Docs
        </a>

        <button className="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          More
        </button>
      </div>
    </div>
  </div>
);
const test2 = (
  <>
    <div className="mt-12">
      <div className="box-border h-10 md:container flex justify-between items-center mx-auto">
        <button
          data-collapse-toggle="mobile-menu"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <svg
            className="hidden w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>

        <div className="hidden md:block md:w-auto" id="mobile-menu">
          <div className="flex space-x-8 text-base font-medium">
            {/* {buttons} */}
          </div>
        </div>
      </div>
    </div>
    <div className="mt-12">{/* {children} */}</div>
  </>
);

const normalButtonGen = (
  link: string,
  content: React.ReactNode,
  key?: string
) => (
  <a
    href={link}
    key={key}
    className="text-gray-700 hover:text-blue-700 dark:text-gray-400 dark:hover:text-white "
  >
    {content}
  </a>
);

export const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return <div>{children}</div>;
};

export const getLayout: React.GetLayout = (component) => (
  <DefaultLayout children={component} />
);

export default DefaultLayout;
