import clsx from "clsx";
import React from "react";

import { AiOutlineReload } from "react-icons/ai";

interface TerminosProps {
  value?: string;
  onChange?: (data: any) => void;
  onNext?: () => void;
  onPrev?: () => void;
  loading: boolean;
}

export default function FinalStep({
  onPrev,
  onNext,
  loading = false,
}: TerminosProps) {
  return (
    <div className='min-h-full flex flex-col'>
      <h2 className='text-xl font-medium text-stone-900'>
        Términos y condiciones
      </h2>
      <div className='grow mt-6'>
        <p>
          En virtud de estar inscrito, bajo la gravedad del juramento, declaro
          que me he entrenado satisfactoriamente, y que, por lo tanto, gozo de
          las aptitudes físicas y psicológicas requeridas para participar en
          competencias deportivas. Lo cual expresamente asumo las consecuencias
          de todo riesgo, caso fortuito o fuerza mayor que concerté con motivo
          del evento, los cuales conozco perfectamente por ser un deportista y
          deslindo de responsabilidades a los organizadores y trabajadores del
          evento. Por otro lado, formal y expresamente me someto a las normas de
          la competencia y el buen juicio de los organizadores respecto del
          organizar de los premios, la imposición de sanciones y
          descalificaciones. Asimismo, declaro conocer que el costo de mi
          inscripción no es reembolsable; costo que deberé cancelar antes de
          retirar mi kit de competencia. Además, autorizo a los organizadores y
          patrocinadores para qué licita y gratuitamente puedan utilizar mi
          imagen, nombre, voz o fotografía en cualquier clase de anuncio
          publicitario relacionado con el evento.
        </p>
        <span className='block mt-8 font-semibold'>
          * Al continuar con el proceso se tomará como que usted está de acuerdo
          con los términos y condiciones descritas anteriormente.
        </span>
      </div>

      <div className='mt-6 w-full flex justify-end'>
        <button
          className={clsx(
            "mr-4 flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-md hover:bg-opacity-10 md:text-lg",
            loading ? "text-gray-400 " : "text-gray-600 hover:bg-gray-600"
          )}
          onClick={onPrev}
          disabled={loading}
        >
          regresar
        </button>
        <button
          className={clsx(
            "shadow flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 md:text-lg",
            !loading && "hover:bg-indigo-700"
          )}
          disabled={loading}
          onClick={_ => {
            if (!loading) onNext?.();
          }}
        >
          {!loading ? (
            "Registrarme"
          ) : (
            <AiOutlineReload className='animate-spin w-6 h-6' />
          )}
        </button>
      </div>
    </div>
  );
}
