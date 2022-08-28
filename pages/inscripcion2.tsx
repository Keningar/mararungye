import React from "react";
import clsx from "clsx";
import MultiStepForm, { StepData } from "@/components/Forms/MultiStepForm";
// import Stepper, { StepData as StepperStepData } from "../Stepper";

import { Evento } from "@/components/Forms/Inscription/Evento";

// ICONS
import { AiOutlineUser } from "react-icons/ai";
import { TbCalendarEvent } from "react-icons/tb";
import { ArrowCircleLeftIcon as ArrowCircleLeftIconOutline } from "@heroicons/react/outline";

const stepPages: StepData[] = [{ label: "Evento", component: <Evento /> }];
const stepperStepData = [
  { id: "evento", label: "Evento", icon: <TbCalendarEvent /> },
  { id: "inf-per", label: "Información Personal", icon: <AiOutlineUser /> },
];

const Column = ({
  children,
  className,
}: React.PropsWithChildren<{ className?: string }>) => (
  <div
    className={clsx(
      "bg-white py-10 px-6 sm:px-10 lg:drop-shadow-md lg:rounded-lg",
      className
    )}
  >
    {children}
  </div>
);

export default function Inscription() {
  const [step, setStep] = React.useState(0);

  return (
    <div className="min-h-screen lg:bg-stone-100">
      <ArrowCircleLeftIconOutline className="fixed top-6 left-6 z-10 w-8 h-8 cursor-pointer" />

      {/* Header */}
      <div className="pt-36 pb-12 px-6 sm:px-0 lg:px-0 lg:py-32 text-center">
        <h1 className="block font-semibold tracking-wider text-gray-900 text-3xl sm:text-4xl md:text-5xl">
          Proceso de Inscripcion
        </h1>
        <span className="block tracking-tight text-gray-600 text-xl mt-2">
          Complete los siguientes pasos para completar su inscripción
        </span>
      </div>

      <div className="max-w-7xl mx-auto pb-8 xl:pb-12">
        <div className="grid h-full lg:px-12 lg:grid-cols-3 lg:gap-8">
          <Column className="h-fit lg:px-10 xl:pl-16">
            <span>Hola</span>
          </Column>
          <Column className="lg:col-span-2 xl:p-12">
            <MultiStepForm
              initialStep={step}
              steps={stepPages}
              onPrev={(_) => setStep(_)}
              onNext={({ nextIndex, values, isLastStep }) => {
                setStep(nextIndex);
                if (isLastStep) console.log(values);
              }}
            />
          </Column>
        </div>
      </div>
    </div>
  );
}
