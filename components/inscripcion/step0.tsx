import React from 'react';

import Container from '@/components/inscripcion/container';

import clsx from 'clsx';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';

import DB_Eventos from '@/DB/eventos.json';

export interface step0Data {
  event: string;
  distancia?: string;
}
interface step0Props {
  value?: step0Data;
  onChange?: (data: Partial<step0Data>) => void;
  onNext?: () => void;
  onPrev?: () => void;
}

export function step0CheckInputs(val?: any) {
  if (!val) return false;
  const inputsKeys = Object.keys(val);
  return (
    inputsKeys.length == 2 &&
    inputsKeys.every(_ => {
      const currVal = val[_];
      return (
        (_ == 'event' && !!DB_Eventos.find(_ => _.id == val.event)) ||
        (typeof currVal == 'string' && currVal != '')
      );
    })
  );
}

export default function Step0({ value, onChange, onNext }: step0Props) {
  const newValue =
    value ??
    ({
      event: '',
      distancia: '',
    } as step0Data);

  const { event, distancia } = newValue;

  const [areValid, setAreValid] = React.useState(step0CheckInputs(newValue));

  return (
    <Container
      name='Evento'
      onNext={onNext}
      allRequiered
      areInputsValid={areValid}
      inputs={[
        {
          label: 'Evento a participar',
          element: (
            <Listbox
              value={event}
              onChange={_ => {
                const updatedValue = { ...newValue, event: _ };
                setAreValid(step0CheckInputs(updatedValue));
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
                    event == '' ? 'text-stone-400' : 'text-stone-900'
                  )}
                >
                  <span className='block truncate'>
                    {DB_Eventos.find(_ => _.id == event)?.name ||
                      'Seleccione un evento'}
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
                    {DB_Eventos.map(event => (
                      <Listbox.Option
                        key={event.id}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active
                              ? 'bg-indigo-100 text-indigo-900'
                              : 'text-gray-900'
                          }`
                        }
                        value={event.id}
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? 'font-medium' : 'font-normal'
                              }`}
                            >
                              {event.name}
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
          label: 'Distancia a recorrer',
          element: (
            <Listbox
              value={distancia}
              onChange={_ => {
                const updatedValue = { ...newValue, distancia: _ };
                setAreValid(step0CheckInputs(updatedValue));
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
                    event == '' ? 'text-stone-400' : 'text-stone-900'
                  )}
                >
                  <span className='block truncate'>
                    {distancia || 'Seleccione una distancia'}
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
                    {DB_Eventos.find(_ => _.id == event)?.distancia.map(dis => (
                      <Listbox.Option
                        key={dis}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active
                              ? 'bg-indigo-100 text-indigo-900'
                              : 'text-gray-900'
                          }`
                        }
                        value={dis}
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? 'font-medium' : 'font-normal'
                              }`}
                            >
                              {dis}
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

/*
export default function Step02({ value, onChange, onNext }: step0Props) {
  const defaultValue = 'Seleccione un evento';
  const currentValue =
    DB_Eventos.find(_ => _.id == value)?.name ?? defaultValue;
  return (
    <div className='min-h-full flex flex-col'>
      <h2 className='text-xl font-medium text-stone-900'>Evento</h2>
      <div className='grow mt-6 flex justify-center'>
        <div>
          <Listbox value={currentValue} onChange={_ => onChange?.(_)}>
            <div className='relative w-80'>
              <Listbox.Button
                className={clsx(
                  'block shadow-sm rounded-md w-full py-3 px-4',
                  'border border-stone-300 focus:border-indigo-500',
                  'focus:outline-2 focus:outline-transparent focus:outline-offset-2',
                  'focus:ring-indigo-500  focus:ring-offset-white focus:ring-offset-0 focus:ring-1',
                  value == '' ? 'text-stone-400' : 'text-stone-900'
                )}
              >
                <span className='block truncate'>{currentValue}</span>
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
                <Listbox.Options className='absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                  {DB_Eventos.map(event => (
                    <Listbox.Option
                      key={event.id}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active
                            ? 'bg-indigo-100 text-indigo-900'
                            : 'text-gray-900'
                        }`
                      }
                      value={event.id}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? 'font-medium' : 'font-normal'
                            }`}
                          >
                            {event.name}
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
        </div>
      </div>

      <div className='mt-6 w-full flex justify-end'>
        <button
          className={clsx(
            'shadow flex items-center justify-center px-6 py-2 border border-transparent text-base font-medium rounded-md text-white md:text-lg',
            currentValue == defaultValue
              ? 'cursor-default bg-gray-600 hove'
              : 'bg-indigo-600 hover:bg-indigo-700'
          )}
          onClick={onNext}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
}
*/
