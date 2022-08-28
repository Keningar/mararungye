import clsx from "clsx";
import React from "react";

interface InClases {
  element?: string;
  label?: string;
  container?: string;
  input?: string;
}
interface InsCommon {
  label: string;
  className?: InClases;
  requiered?: boolean;
}
interface InsInputProps extends InsCommon {
  name: string;
  type: React.HTMLInputTypeAttribute;
  value: any;
  onChange: any;
  autoComplete?: string;
}
interface InsInputElProps extends InsCommon {
  element: React.ReactNode;
}
interface InsContainerProps {
  inputs: (InsInputProps | InsInputElProps)[];
  name: string;
  allRequiered?: boolean;
  onNext?: () => void;
  onPrev?: () => void;
  classes?: {
    container?: string;
  };
  areInputsValid?: boolean;
}

const isAnElement = (
  el: InsInputProps | InsInputElProps
): el is InsInputElProps => "element" in el;

export default function Container({
  name,
  inputs,
  onNext,
  onPrev,
  classes,
  allRequiered = false,
  areInputsValid = false,
}: InsContainerProps) {
  return (
    <div className='min-h-full flex flex-col'>
      <h2 className='text-xl font-medium text-stone-900'>{name}</h2>
      <div
        className={clsx(
          "grow mt-6 grid gap-y-6 sm:grid-cols-2 sm:gap-x-8",
          classes?.container
        )}
      >
        {inputs.map(_ =>
          isAnElement(_) ? (
            <div key={_.label} className={_.className?.element}>
              <label
                className={clsx(
                  "block text-sm font-medium text-stone-900",
                  _.className?.label
                )}
              >
                {(_.requiered ?? allRequiered) && (
                  <span className='inline-block mr-1 text-red-500'>*</span>
                )}
                {_.label}
              </label>
              <div className={clsx("mt-1", _.className?.container)}>
                {_.element}
              </div>
            </div>
          ) : (
            <div key={_.name} className={_.className?.element}>
              <label
                htmlFor={_.name}
                className={clsx(
                  "block text-sm font-medium text-stone-900",
                  _.className?.label
                )}
              >
                {(_.requiered ?? allRequiered) && (
                  <span className='inline-block mr-1 text-red-500'>*</span>
                )}
                {_.label}
              </label>
              <div className={clsx("mt-1", _.className?.container)}>
                <input
                  type={_.type}
                  name={_.name}
                  id={_.name}
                  autoComplete={_.autoComplete}
                  value={_.value}
                  onChange={_.onChange}
                  className={clsx(
                    "py-3 px-4 block w-full shadow-sm text-stone-900 focus:ring-indigo-500 focus:border-indigo-500 border-stone-300 rounded-md",
                    _.className?.input
                  )}
                />
              </div>
            </div>
          )
        )}
      </div>

      <div className='mt-6 w-full flex justify-end'>
        <button
          className='mr-4 flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-gray-600 hover:bg-gray-600 hover:bg-opacity-10 md:text-lg'
          onClick={onPrev}
        >
          regresar
        </button>
        <button
          className={clsx(
            "shadow flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-white md:text-lg",
            areInputsValid
              ? "bg-indigo-600 hover:bg-indigo-700"
              : "cursor-default bg-gray-600 hove"
          )}
          onClick={onNext}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}
