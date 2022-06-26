import React from "react";

import CuentasDB from "@/DB/cuentas.json";

import { AiOutlineBank } from "react-icons/ai";

interface FinalStepProps {
  value?: string;
  onChange?: (data: any) => void;
  onNext?: () => void;
  onPrev?: () => void;
  error: boolean;
}

export default function FinalStep({
  onPrev,
  onNext,
  error = false,
}: FinalStepProps) {
  return (
    <div className='min-h-full flex flex-col'>
      <h2 className='text-xl font-medium text-stone-900'>
        {error ? "Error en el registro" : "Gracias por registrarse"}
      </h2>
      {error ? (
        <div className='grow mt-6 '>
          <p>
            Lo sentimos, ha ocurrido un error en nuestros servidores. Por favor
            inténtelo en unos momentos
          </p>
        </div>
      ) : (
        <div className='grow mt-6 '>
          <p>
            Se le ha enviado un correo con la información de su registro y pago
            de su inscripción.
          </p>
          <p>Para validar dicha tu inscripción debes cancelar el valor en:</p>
          <div className='mt-12 w-full flex flex-wrap justify-center'>
            {CuentasDB.map(_ => (
              <div
                key={_.num_cuenta}
                className='w-60 h-60 bg-yellow-400 drop-shadow-lg rounded-2xl overflow-hidden p-6'
              >
                <div className='relative flex items-center'>
                  <AiOutlineBank className='w-6 h-full ' />
                  <h3 className='ml-2 uppercase font-semibold text-center text-lg'>
                    {_.banco}
                  </h3>
                </div>
                <span className='block mt-6 uppercase'>{_.propietario}</span>
                <div className='mt-6 grid grid-cols-2'>
                  <span className='font-semibold uppercase'>cedula:</span>
                  <span>{_.cedula}</span>
                  <span className='font-semibold uppercase'>tipo:</span>
                  <span className='uppercase'>{_.tipo}</span>
                  <span className='font-semibold uppercase'>cuenta:</span>
                  <span>{_.num_cuenta}</span>
                </div>
              </div>
            ))}
          </div>
          <span className='block mt-12 font-semibold text-sm'>
            * Una vez hecho el pago enviar el comporbante al WhatsApp
            <a
              href='https://wa.me/5930960760637'
              target='_blank'
              className='ml-1 text-green-500'
            >
              0960760637
            </a>
          </span>
        </div>
      )}

      <div className='mt-6 w-full flex justify-end'>
        <button
          className='shadow flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-lg'
          onClick={onNext}
        >
          Terminar
        </button>
      </div>
    </div>
  );
}
