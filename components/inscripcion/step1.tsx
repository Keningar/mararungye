import React from 'react';

import Container from '@/components/inscripcion/container';

import clsx from 'clsx';
import { Listbox, Transition } from '@headlessui/react';
import Datepicker from '@/components/Datepicker';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';

export interface step1Data {
  firstName: string;
  secondName: string;
  lastName: string;
  secondLastName: string;
  country: string;
  sex: string;
  age: string;
  ci: string;
  birthday: Date;
  especial: string;
}

interface step1Props {
  value?: step1Data;
  onChange?: (data: Partial<step1Data>) => void;
  onNext?: () => void;
  onPrev?: () => void;
}

const sexo_op = ['Masculino', 'Femenino'];
const si_no_op = ['Si', 'No'];

export function step1CheckInputs(val?: any) {
  if (!val) return false;

  const inputsKeys = Object.keys(val);

  return (
    inputsKeys.length == 10 &&
    inputsKeys.every(_ => {
      const currVal = val[_];
      return (
        (typeof currVal == 'string' && currVal != '') ||
        Object.prototype.toString.call(currVal) === '[object Date]'
      );
    })
  );
}

export default function Step1({ value, onChange, onNext, onPrev }: step1Props) {
  const newValue =
    value ??
    ({
      firstName: '',
      secondName: '',
      lastName: '',
      secondLastName: '',
      birthday: new Date(),
      country: '',
      sex: '',
      ci: '',
      age: '',
      especial: si_no_op[1],
    } as step1Data);

  const {
    firstName,
    secondName,
    lastName,
    secondLastName,
    birthday,
    country,
    sex,
    ci,
    age,
    especial,
  } = newValue;

  const [areValid, setAreValid] = React.useState(step1CheckInputs(newValue));

  const changeInscriptionData = ({
    currentTarget: _,
  }: React.ChangeEvent<HTMLInputElement>) => {
    let val = _.value;
    if (_.name == 'age' || _.name == 'ci')
      val = _.value.match(/\d+/)?.[0] ?? '';

    const nextVal = { ...(newValue ?? {}), [_.name]: val };
    setAreValid(step1CheckInputs(nextVal));
    onChange?.(nextVal);
  };

  return (
    <Container
      name='Información Personal'
      onNext={onNext}
      onPrev={onPrev}
      allRequiered
      areInputsValid={areValid}
      inputs={[
        {
          name: 'firstName',
          label: 'Primer nombre',
          type: 'text',
          autoComplete: 'given-name',
          value: firstName,
          onChange: changeInscriptionData,
        },
        {
          name: 'secondName',
          label: 'Segundo nombre',
          type: 'text',
          autoComplete: 'additional-name',
          value: secondName,
          onChange: changeInscriptionData,
        },
        {
          name: 'lastName',
          label: 'Apellido paterno',
          type: 'text',
          autoComplete: 'family-name',
          value: lastName,
          onChange: changeInscriptionData,
        },
        {
          name: 'secondLastName',
          label: 'Apellido materno',
          type: 'text',
          value: secondLastName,
          onChange: changeInscriptionData,
        },
        {
          label: 'Fecha de nacimiento',
          element: (
            <Datepicker
              startDate={birthday}
              onChange={_ => {
                const updatedValue = { ...newValue, birthday: _ };
                setAreValid(step1CheckInputs(updatedValue));
                onChange?.(updatedValue);
              }}
            />
          ),
        },
        {
          name: 'country',
          label: 'País de nacimiento',
          type: 'text',
          autoComplete: 'country-name',
          value: country,
          onChange: changeInscriptionData,
        },
        {
          name: 'age',
          label: 'Edad',
          type: 'text',
          value: age,
          onChange: changeInscriptionData,
        },
        {
          label: 'Sexo',
          element: (
            <Listbox
              value={sex}
              onChange={_ => {
                const updatedValue = { ...newValue, sex: _ };
                setAreValid(step1CheckInputs(updatedValue));
                onChange?.(updatedValue);
              }}
            >
              <div className='relative mt-1'>
                <Listbox.Button
                  className={clsx(
                    'block shadow-sm rounded-md w-full py-3 px-4',
                    'border border-stone-300 focus:border-indigo-500',
                    'focus:outline-2 focus:outline-transparent focus:outline-offset-2',
                    'focus:ring-indigo-500  focus:ring-offset-white focus:ring-offset-0 focus:ring-1',
                    sex == '' ? 'text-stone-400' : 'text-stone-900'
                  )}
                >
                  <span className='block truncate'>
                    {sex || 'Seleccione una opcción'}
                  </span>
                  <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3'>
                    <SelectorIcon
                      className='h-5 w-5 text-gray-400'
                      aria-hidden='true'
                    />
                  </span>
                </Listbox.Button>
                <Transition
                  as={React.Fragment}
                  leave='transition ease-in duration-100'
                  leaveFrom='opacity-100'
                  leaveTo='opacity-0'
                >
                  <Listbox.Options className='absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                    {sexo_op.map(sex => (
                      <Listbox.Option
                        key={sex}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active
                              ? 'bg-indigo-100 text-indigo-900'
                              : 'text-gray-900'
                          }`
                        }
                        value={sex}
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? 'font-medium' : 'font-normal'
                              }`}
                            >
                              {sex}
                            </span>
                            {selected ? (
                              <span className='absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600'>
                                <CheckIcon
                                  className='h-5 w-5'
                                  aria-hidden='true'
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
          name: 'ci',
          label: 'C.I. / Pasaporte',
          type: 'text',
          value: ci,
          onChange: changeInscriptionData,
        },
        {
          label: 'Capacidad especial',
          element: (
            <Listbox
              value={especial}
              onChange={_ => {
                const updatedValue = { ...newValue, especial: _ };
                setAreValid(step1CheckInputs(updatedValue));
                onChange?.(updatedValue);
              }}
            >
              <div className='relative mt-1'>
                <Listbox.Button
                  className={clsx(
                    'block shadow-sm rounded-md w-full py-3 px-4',
                    'border border-stone-300 focus:border-indigo-500',
                    'focus:outline-2 focus:outline-transparent focus:outline-offset-2',
                    'focus:ring-indigo-500  focus:ring-offset-white focus:ring-offset-0 focus:ring-1',
                    'text-stone-900'
                  )}
                >
                  <span className='block truncate'>{especial}</span>
                  <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3'>
                    <SelectorIcon
                      className='h-5 w-5 text-gray-400'
                      aria-hidden='true'
                    />
                  </span>
                </Listbox.Button>
                <Transition
                  as={React.Fragment}
                  leave='transition ease-in duration-100'
                  leaveFrom='opacity-100'
                  leaveTo='opacity-0'
                >
                  <Listbox.Options className='absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                    {si_no_op.map(op => (
                      <Listbox.Option
                        key={op}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active
                              ? 'bg-indigo-100 text-indigo-900'
                              : 'text-gray-900'
                          }`
                        }
                        value={op}
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? 'font-medium' : 'font-normal'
                              }`}
                            >
                              {op}
                            </span>
                            {selected ? (
                              <span className='absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600'>
                                <CheckIcon
                                  className='h-5 w-5'
                                  aria-hidden='true'
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
      ]}
    />
  );
}
