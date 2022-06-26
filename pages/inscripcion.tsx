import type { NextPage } from "next";
import React from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import clsx from "clsx";

import { EventsStore } from "@/stores/eventsStore";
import DB_Eventos from "@/DB/eventos.json";

import Footer from "@/components/Footer";
import Step0, { step0CheckInputs } from "@/components/inscripcion/step0";
import Step1, {
  step1Data,
  step1CheckInputs,
} from "@/components/inscripcion/step1";
import Step2, {
  step2Data,
  step2CheckInputs,
} from "@/components/inscripcion/step2";
import Step3, {
  step3Data,
  step3CheckInputs,
} from "@/components/inscripcion/step3";
import Terminos from "@/components/inscripcion/terminos";
import FinalStep from "@/components/inscripcion/finalStep";

import { IconType } from "react-icons";
import {
  AiOutlineUser,
  AiOutlinePhone,
  AiOutlineCheck,
  AiOutlineClose,
} from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { IoShirtOutline } from "react-icons/io5";
import { CgFileDocument } from "react-icons/cg";
import { TbCalendarEvent } from "react-icons/tb";
import { ArrowCircleLeftIcon as ArrowCircleLeftIconOutline } from "@heroicons/react/outline";

interface InscriptionData {
  step1: step1Data;
  step2: step2Data;
  step3: step3Data;
  [step: string]: any;
}

const twoColumnsStyle =
  "bg-white py-10 px-6 sm:px-10 lg:drop-shadow-md lg:rounded-lg";

const steps: {
  name: string;
  icon: IconType;
  form: any;
  check: (val: any) => boolean;
}[] = [
  {
    name: "Evento",
    icon: TbCalendarEvent,
    form: Step0,
    check: step0CheckInputs,
  },
  {
    name: "Información Personal",
    icon: AiOutlineUser,
    form: Step1,
    check: step1CheckInputs,
  },
  {
    name: "Información de Contacto",
    icon: AiOutlinePhone,
    form: Step2,
    check: step2CheckInputs,
  },
  {
    name: "Dirección",
    icon: GoLocation,
    form: Step3,
    check: step3CheckInputs,
  },
  {
    name: "Terminos y condiciones",
    icon: CgFileDocument,
    form: Terminos,
    check: () => true,
  },
  // {
  //   name: "Personalización Camisa",
  //   icon: IoShirtOutline,
  //   form: Step1,
  // },
  {
    name: "Registro terminado",
    icon: AiOutlineCheck,
    form: FinalStep,
    check: step0CheckInputs,
  },
];

const completedStepsDefault = Array<boolean>(steps.length).fill(false);

const Inscripcion: NextPage = () => {
  const { back: goBack } = useRouter();

  const selectedEvent = EventsStore.useSelectedEvent();
  const changeSelectedEvent = EventsStore.useChangeSelectedEvent();

  const [selectedStep, setSelectedStep] = React.useState(0);
  const [completedStep, setCompletedStep] = React.useState(
    completedStepsDefault
  );
  const [inscriptionData, setInscriptionData] = React.useState<
    Partial<InscriptionData>
  >({});
  const [dataHasSend, setDataHasSend] = React.useState<{
    loading: boolean;
    error: boolean;
    data?: any;
  }>({ loading: false, error: false });

  const getStepName = (i?: number) => `step${i ?? selectedStep}`;

  const isFormValid = () =>
    steps[selectedStep].check(
      selectedStep == 0 ? selectedEvent : inscriptionData[getStepName()]
    );
  const prevStepsHasBeenCompleted = (step: number) =>
    completedStep.slice(0, step).every(_ => _ === true);
  const setCurrentStepCompleted = () => {
    if (completedStep[selectedStep] === false && isFormValid()) {
      const newCompletedStep = [...completedStep];
      newCompletedStep[selectedStep] = true;
      setCompletedStep(newCompletedStep);
    }
  };
  const nextStep = async () => {
    if (selectedStep == steps.length - 2 && !dataHasSend.loading) {
      setDataHasSend(_ => ({ ..._, loading: true }));

      const res = await fetch("/api/inscription", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          event: DB_Eventos.find(_ => _.id == selectedEvent)?.name,
          ...inscriptionData[getStepName(1)],
          ...inscriptionData[getStepName(2)],
          ...inscriptionData[getStepName(3)],
        }),
      });
      console.log(res);

      // const res = await new Promise<boolean>((resolve, reject) => {
      //   setTimeout(() => {
      //     resolve(false);
      //   }, 3000);
      // });
      setDataHasSend(_ => ({ ..._, loading: false }));
    }

    setCurrentStepCompleted();
    if (isFormValid()) setSelectedStep(_ => Math.min(_ + 1, steps.length - 1));
  };

  const previusStep = () => {
    if (!dataHasSend.loading) setSelectedStep(_ => Math.max(_ - 1, 0));
  };
  const onChange = (_: any) => {
    if (selectedStep == 0) {
      changeSelectedEvent(_);
    } else {
      setInscriptionData({ ...inscriptionData, [getStepName()]: _ });
    }
  };

  const SelectedForm = steps[selectedStep].form;

  return (
    <div className='min-h-screen lg:bg-stone-100'>
      <ArrowCircleLeftIconOutline
        className='fixed top-6 left-6 z-10 w-8 h-8 cursor-pointer'
        onClick={goBack}
      />

      {/* Header */}
      <div className='pt-36 pb-12 px-6 sm:px-0 lg:px-0 lg:py-32 text-center'>
        <h1 className='block font-semibold tracking-wider text-gray-900 text-3xl sm:text-4xl md:text-5xl'>
          Proceso de Inscripcion
        </h1>
        <span className='block tracking-tight text-gray-600 text-xl mt-2'>
          Complete los siguientes pasos para completar su inscripción
        </span>
      </div>

      {/* Step Form */}
      <div className='max-w-7xl mx-auto pb-8 xl:pb-12'>
        <div className='grid h-full lg:px-12 lg:grid-cols-3 lg:gap-8'>
          {/* Stepper */}
          <div className={clsx(twoColumnsStyle, "h-fit lg:px-10 xl:pl-16")}>
            <ul className='flex justify-between items-center lg:flex-col lg:justify-start lg:items-start'>
              {steps.map((_, i) => (
                <React.Fragment key={`${_.name} - step`}>
                  {i == 0 ? null : (
                    <span
                      key={`${_.name} - step bar`}
                      className={clsx(
                        "w-full h-0.5 lg:h-12 lg:w-0.5 lg:ml-5",
                        i <= selectedStep ? "bg-indigo-300" : "bg-gray-300"
                      )}
                    />
                  )}
                  <li
                    key={`${_.name} - step element`}
                    className='relative flex items-center cursor-pointer'
                    onClick={_ => {
                      if (
                        i < selectedStep ||
                        (i > selectedStep && prevStepsHasBeenCompleted(i))
                      )
                        return setSelectedStep(i);

                      if (isFormValid() && i == selectedStep + 1) {
                        setCurrentStepCompleted();
                        setSelectedStep(i);
                      }
                    }}
                  >
                    <motion.span
                      className='drop-shadow-md p-2 rounded-full h-10 w-10 box-border'
                      animate={
                        i == selectedStep
                          ? {
                              backgroundColor: "rgb(255, 255, 255)",
                              color: "rgb(129, 140, 248)",
                              borderWidth: 1,
                              borderColor: "rgb(129, 140, 248)",
                            }
                          : i < selectedStep
                          ? {
                              backgroundColor: "rgb(129, 140, 248)",
                              color: "rgb(255, 255, 255)",
                            }
                          : {
                              backgroundColor: "rgb(255, 255, 255)",
                              color: "rgb(156, 163, 175)",
                            }
                      }
                    >
                      {i == steps.length - 1 && dataHasSend.error ? (
                        <AiOutlineClose className='w-full h-full' />
                      ) : (
                        <_.icon className='w-full h-full' />
                      )}
                    </motion.span>
                    <span className='hidden ml-4 lg:block'>{_.name}</span>
                  </li>
                </React.Fragment>
              ))}
            </ul>
          </div>
          {/* Step info form */}
          <div className={clsx(twoColumnsStyle, "lg:col-span-2 xl:p-12")}>
            <SelectedForm
              value={
                selectedStep == 0
                  ? selectedEvent
                  : (inscriptionData[getStepName()] as any)
              }
              onChange={onChange}
              onNext={nextStep}
              onPrev={previusStep}
              loading={dataHasSend.loading}
              error={dataHasSend.error}
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Inscripcion;
