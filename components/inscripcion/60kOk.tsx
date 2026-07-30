import React from "react";

import Container from "@/components/inscripcion/container";
import { Listbox as _Listbox, Transition as _Transition } from "@headlessui/react";
// React 19 strict JSX types vs @headlessui/react v1 ref-forwarding
const Listbox: any = _Listbox;
const Transition: any = _Transition;
import { CheckIcon as _CheckIcon, SelectorIcon as _SelectorIcon } from "@heroicons/react/solid";
// React 19 strict JSX types vs @heroicons/react
const CheckIcon: any = _CheckIcon;
const SelectorIcon: any = _SelectorIcon;
import clsx from "clsx";

export interface aParticipadoData {
  a_participado?: string;
  foto?: string;
  recomendedBy?: string;
}

interface step2Props {
  value?: aParticipadoData;
  onChange?: (data: Partial<aParticipadoData>) => void;
  onNext?: () => void;
  onPrev?: () => void;
}

const si_no_op = ["Si", "No"];

export function step2CheckInputs(val?: any) {
  if (!val) return false;

  const inputsKeys = Object.keys(val);

  return (
    inputsKeys.length &&
    inputsKeys.every((_) => {
      const currVal = val[_];
      return typeof currVal == "string" && currVal != "";
    })
  );
}

export function isValidAParticipado(data: aParticipadoData) {
  const { foto, recomendedBy, a_participado } = data;

  return !!(
    (a_participado == "No" && recomendedBy?.length && foto?.length) ||
    a_participado == "Si"
  );
}

export default function AParticipado({
  value,
  onChange,
  onNext,
  onPrev,
}: step2Props) {
  const newValue =
    value ??
    ({ a_participado: "", foto: "", recomendedBy: "" } as aParticipadoData);
  let { a_participado, foto, recomendedBy } = newValue;

  const [areValid, setAreValid] = React.useState(true);

  const handleFileChange = (e: any) => {
    const _file = e.target.files[0];
    if (_file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        foto = reader.result?.toString();
        onChange?.({ ...(newValue ?? {}), foto });
      };
      reader.readAsDataURL(_file);
    }
  };

  const changeRecomendedBy = ({
    currentTarget: _,
  }: React.ChangeEvent<HTMLInputElement>) => {
    let val = _.value;

    recomendedBy = val;

    const nextVal = { ...(newValue ?? {}), recomendedBy };
    onChange?.(nextVal);
  };

  return (
    <Container
      name="Participaciones anteriores"
      onNext={onNext}
      onPrev={onPrev}
      allRequiered
      areInputsValid={areValid}
      inputs={[
        {
          label: "Has participado en 60k Ultramaratón del Guayas",
          element: (
            <Listbox
              value={a_participado}
              onChange={(_: string) => {
                a_participado = _;
                const updatedValue = { ...newValue, a_participado: _ };
                onChange?.(updatedValue);
              }}
            >
              <div className="relative mt-1">
                <Listbox.Button
                  className={clsx(
                    "block shadow-sm rounded-md w-full py-3 px-4",
                    "border border-stone-300 focus:border-indigo-500",
                    "focus:outline-2 focus:outline-transparent focus:outline-offset-2",
                    "focus:ring-indigo-500  focus:ring-offset-white focus:ring-offset-0 focus:ring-1",
                    "text-stone-900"
                  )}
                >
                  <span className="block truncate">{a_participado}</span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <SelectorIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>
                <Transition
                  as={React.Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {si_no_op.map((op) => (
                      <Listbox.Option
                        key={op}
                        className={({ active }: { active: boolean }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active
                              ? "bg-indigo-100 text-indigo-900"
                              : "text-gray-900"
                          }`
                        }
                        value={op}
                      >
                        {({ selected }: { selected: boolean }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? "font-medium" : "font-normal"
                              }`}
                            >
                              {op}
                            </span>
                            {selected ? (
                              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600">
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          ),
        },
        {
          label: "Registro de competencia maratón 42k año 2024-2025",
          show: a_participado == "No",
          element: (
            <input type="file" onChange={handleFileChange} accept="image/*" />
          ),
        },
        {
          name: "recomendedBy",
          label: "Nombre de quien te recomienda",
          type: "text",
          value: recomendedBy,
          show: a_participado == "No",
          onChange: changeRecomendedBy,
        },
      ]}
    />
  );
}
