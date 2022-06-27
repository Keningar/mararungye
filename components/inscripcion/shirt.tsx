import React from 'react';

import Container from '@/components/inscripcion/container';

import clsx from 'clsx';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';

export interface shirtData {
  talla: string;
  grupo: string;
}

interface shirtProps {
  value?: shirtData;
  onChange?: (data: Partial<shirtData>) => void;
  onNext?: () => void;
  onPrev?: () => void;
}

export function shirtCheckInputs(val?: any) {
  if (!val) return false;

  const inputsKeys = Object.keys(val);

  return (
    inputsKeys.length == 2 &&
    inputsKeys.every(_ => {
      const currVal = val[_];
      if (_ == 'grupo') return true;
      return typeof currVal == 'string' && currVal != '';
    })
  );
}

const tallas = ['XXS', 'XS', 'S', 'M', 'L', 'XL', 'XXL'];

export default function Shirt({ value, onChange, onNext, onPrev }: shirtProps) {
  const newValue = value ?? ({ grupo: '', talla: '' } as shirtData);
  const { grupo, talla } = newValue;

  const [areValid, setAreValid] = React.useState(shirtCheckInputs(newValue));

  const changeInscriptionData = ({
    currentTarget: _,
  }: React.ChangeEvent<HTMLInputElement>) => {
    let val = _.value;
    const nextVal = { ...(newValue ?? {}), [_.name]: val };
    setAreValid(shirtCheckInputs(nextVal));
    onChange?.(nextVal);
  };

  return (
    <Container
      name='Información de Contacto'
      onNext={onNext}
      onPrev={onPrev}
      allRequiered
      areInputsValid={areValid}
      inputs={[
        {
          name: 'grupo',
          label: 'Empresa/Club/Grupo',
          type: 'text',
          value: grupo,
          requiered: false,
          onChange: changeInscriptionData,
        },
        {
          label: 'Talla',
          element: (
            <Listbox
              value={talla}
              onChange={_ => {
                const updatedValue = { ...newValue, talla: _ };
                setAreValid(shirtCheckInputs(updatedValue));
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
                    talla == '' ? 'text-stone-400' : 'text-stone-900'
                  )}
                >
                  <span className='block truncate'>
                    {talla || 'Seleccione una opcción'}
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
                    {tallas.map(talla => (
                      <Listbox.Option
                        key={talla}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active
                              ? 'bg-indigo-100 text-indigo-900'
                              : 'text-gray-900'
                          }`
                        }
                        value={talla}
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? 'font-medium' : 'font-normal'
                              }`}
                            >
                              {talla}
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
