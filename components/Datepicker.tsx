/*
References:
https://codesandbox.io/s/github/atreya2011/react-tailwind-datepicker-test?file=/src/App.tsx:77-90

Other Posible Options:
https://github.com/its-danny/use-lilius
https://github.com/msnegurski/tailwind-react-datepicker
*/

import React from 'react';
import {
  format,
  subMonths,
  addMonths,
  subYears,
  addYears,
  getDaysInMonth,
  getDay,
  getYear,
  lastDayOfMonth,
} from 'date-fns';
import { es } from 'date-fns/locale';
import clsx from 'clsx';
import { usePopper } from 'react-popper';
import { Dialog, Transition } from '@headlessui/react';
import ClickAwayListener from 'react-click-away-listener';

import range from '@/utils/Range';
import { useIsMedium } from '@/utils/useMediaQuery';

import { CheckIcon } from '@heroicons/react/outline';

type DatepickerType = 'fecha' | 'mes' | 'año';
const DAYS = ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'];

const getYearRange = (year?: number) => {
  const currentYear = year ?? getYear(new Date());
  const NumberPerRange = 16;
  const currentYearRange = Math.trunc(currentYear / NumberPerRange);
  const bottomLimit = currentYearRange * NumberPerRange;
  const upperLimit = (currentYearRange + 1) * NumberPerRange - 1;

  return range(bottomLimit, upperLimit);
};

interface DatepickerProps {
  startDate?: Date;
  onChange?: (d: Date) => any;
}

export default function Datepicker({ startDate, onChange }: DatepickerProps) {
  const isMedium = useIsMedium();

  const [dayCount, setDayCount] = React.useState<Array<number>>([]);
  const [blankDays, setBlankDays] = React.useState<Array<number>>([]);
  const [yearRange, setYearRange] = React.useState(getYearRange);
  const [showDatepicker, setShowDatepicker] = React.useState(false);
  const [datepickerHeaderDate, setDatepickerHeaderDate] = React.useState(
    startDate ?? new Date()
  );
  const [selectedDate, setSelectedDate] = React.useState(
    startDate ?? new Date()
  );
  const [type, setType] = React.useState<DatepickerType>('fecha');

  const [referenceElement, setReferenceElement] =
    React.useState<HTMLInputElement | null>(null);
  const [popperElement, setPopperElement] = React.useState<any>(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 32],
        },
      },
    ],
  });

  const decrement = () => {
    switch (type) {
      case 'fecha':
        setDatepickerHeaderDate(prev => subMonths(prev, 1));
        break;
      case 'mes':
        setDatepickerHeaderDate(prev => subYears(prev, 1));
        break;
      case 'año':
        setYearRange(getYearRange(yearRange[0] - 1));
        break;
    }
  };

  const increment = () => {
    switch (type) {
      case 'fecha':
        setDatepickerHeaderDate(prev => addMonths(prev, 1));
        break;
      case 'mes':
        setDatepickerHeaderDate(prev => addYears(prev, 1));
        break;
      case 'año':
        setYearRange(getYearRange(yearRange[yearRange.length - 1] + 1));
        break;
    }
  };

  const isToday = (date: number) => selectedDate.getDate() == date;

  const setDateValue = (date: number) => () => {
    const newDate = new Date(
      datepickerHeaderDate.getFullYear(),
      datepickerHeaderDate.getMonth(),
      date
    );
    setSelectedDate(newDate);
    onChange?.(newDate);
    setShowDatepicker(false);
  };

  const getDayCount = (date: Date) => {
    let daysInMonth = getDaysInMonth(date);

    // find where to start calendar day of week
    let dayOfWeek = getDay(new Date(date.getFullYear(), date.getMonth(), 1));
    let blankdaysArray = [];
    for (let i = 1; i <= dayOfWeek; i++) {
      blankdaysArray.push(i);
    }

    let daysArray = [];
    for (let i = 1; i <= daysInMonth; i++) {
      daysArray.push(i);
    }

    setBlankDays(blankdaysArray);
    setDayCount(daysArray);
  };

  const isSelectedMonth = (month: number) => selectedDate.getMonth() == month;

  const setMonthValue = (month: number) => () => {
    const lastMonthDay = lastDayOfMonth(
      new Date(datepickerHeaderDate.getFullYear(), month, 1)
    ).getDate();
    const pickerDate = datepickerHeaderDate.getDate();
    setDatepickerHeaderDate(
      new Date(
        datepickerHeaderDate.getFullYear(),
        month,
        pickerDate > lastMonthDay ? lastMonthDay : pickerDate
      )
    );
    setType('fecha');
  };

  const isSelectedYear = (year: number) => selectedDate.getFullYear() == year;

  const setYearValue = (year: number) => () => {
    setDatepickerHeaderDate(
      new Date(
        year,
        datepickerHeaderDate.getMonth(),
        datepickerHeaderDate.getDate()
      )
    );
    setType('fecha');
  };

  const toggleDatepicker = () => setShowDatepicker(prev => !prev);

  const showMonthPicker = () => setType('mes');

  const showYearPicker = () => setType('año');

  React.useEffect(() => {
    getDayCount(datepickerHeaderDate);
  }, [datepickerHeaderDate]);

  const datepicker = showDatepicker && (
    <div className='bg-white rounded-lg shadow-xl p-4 w-full'>
      {/* Header */}
      <div className='flex h-9 mb-2'>
        {/* Decrement Month Arrow */}
        <div
          className='cursor-pointer p-1 rounded-lg hover:bg-gray-200'
          onClick={decrement}
        >
          <svg
            className='h-6 w-6 text-gray-500 inline-flex'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M15 19l-7-7 7-7'
            />
          </svg>
        </div>
        {/* Show Month */}
        {type === 'fecha' && (
          <div
            onClick={showMonthPicker}
            className='grow p-1 text-lg font-bold text-gray-800 cursor-pointer hover:bg-gray-200 rounded-lg'
          >
            <p className='text-center'>
              {format(datepickerHeaderDate, 'MMMM')}
            </p>
          </div>
        )}
        {/* Show Year */}
        {type != 'año' && (
          <div
            onClick={showYearPicker}
            className='grow p-1 text-lg font-bold text-gray-800 cursor-pointer hover:bg-gray-200 rounded-lg'
          >
            <p className='text-center'>
              {format(datepickerHeaderDate, 'yyyy')}
            </p>
          </div>
        )}
        {type === 'año' && (
          <div
            onClick={showYearPicker}
            className='grow p-1 text-lg font-bold text-gray-800'
          >
            <p className='text-center'>
              {`${yearRange[0]} - ${yearRange[yearRange.length - 1]}`}
            </p>
          </div>
        )}
        {/* Increment Month Arrow */}
        <div
          className='cursor-pointer p-1 rounded-lg hover:bg-gray-200'
          onClick={increment}
        >
          <svg
            className='h-6 w-6 text-gray-500 inline-flex'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M9 5l7 7-7 7'
            />
          </svg>
        </div>
      </div>

      {type === 'fecha' && (
        <>
          <div className='grid grid-cols-7 mb-3 -mx-1'>
            {DAYS.map((day, i) => (
              <div key={i} className='px-1'>
                <div className='text-gray-800 font-medium text-center text-xs'>
                  {day}
                </div>
              </div>
            ))}
          </div>
          <div className='grid grid-cols-7 -mx-1'>
            {blankDays.map((_, i) => (
              <div
                key={i}
                className='text-center border p-1 border-transparent text-sm h-10 md:h-7'
              />
            ))}
            {dayCount.map((d, i) => (
              <div key={i} className='px-1 mb-1'>
                <div
                  onClick={setDateValue(d)}
                  className={clsx(
                    'cursor-pointer flex justify-center items-center text-sm rounded-full leading-loose transition ease-in-out duration-100 h-10 md:h-7',
                    isToday(d)
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-700 hover:bg-blue-200'
                  )}
                >
                  {d}
                </div>
              </div>
            ))}
          </div>
        </>
      )}
      {type === 'mes' && (
        <div className='flex flex-wrap -mx-1'>
          {Array(12)
            .fill(null)
            .map((_, i) => {
              return (
                <div key={i} onClick={setMonthValue(i)} className='w-1/4'>
                  <div
                    className={clsx(
                      'cursor-pointer rounded-lg p-5 font-semibold text-center text-sm capitalize hover:bg-gray-200',
                      isSelectedMonth(i)
                        ? 'bg-indigo-500 text-white hover:bg-indigo-400'
                        : 'text-gray-700 hover:bg-indigo-200'
                    )}
                  >
                    {format(
                      new Date(datepickerHeaderDate.getFullYear(), i, 1),
                      'MMM',
                      {
                        locale: es,
                      }
                    )}
                  </div>
                </div>
              );
            })}
        </div>
      )}
      {type === 'año' && (
        <div className='flex flex-wrap -mx-1'>
          {yearRange.map(_ => (
            <div key={_} onClick={setYearValue(_)} className='w-1/4'>
              <div
                className={clsx(
                  'cursor-pointer rounded-lg px-3 py-4 font-semibold text-center text-sm capitalize hover:bg-gray-200',
                  isSelectedYear(_)
                    ? 'bg-indigo-500 text-white hover:bg-indigo-400'
                    : 'text-gray-700 hover:bg-indigo-200'
                )}
              >
                {_}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className='relative mt-1'>
      <input type='hidden' name='date' />
      <input
        type='text'
        readOnly
        className='py-3 px-4 block w-full shadow-sm text-stone-900 focus:ring-indigo-500 focus:border-indigo-500 border-stone-300 rounded-md'
        placeholder='Select date'
        value={format(selectedDate, 'dd/MM/yyyy')}
        onClick={toggleDatepicker}
        ref={setReferenceElement}
        onKeyDown={_ => {
          if (_.code == 'Enter') toggleDatepicker();
        }}
      />
      <div
        className='cursor-pointer absolute top-0 right-0 pr-4 py-3'
        onClick={toggleDatepicker}
      >
        <svg
          className='h-6 w-6 text-gray-400'
          fill='none'
          viewBox='0 0 24 24'
          stroke='currentColor'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
          />
        </svg>
      </div>
      {!isMedium && (
        <Transition.Root show={showDatepicker} as={React.Fragment}>
          <Dialog
            as='div'
            className='fixed z-10 inset-0 overflow-y-auto'
            onClose={toggleDatepicker}
          >
            <div className='flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center'>
              <Transition.Child
                as={React.Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0'
                enterTo='opacity-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
              >
                <Dialog.Overlay className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
              </Transition.Child>

              {/* This element is to trick the browser into centering the modal contents. */}

              <Transition.Child
                as={React.Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
                enterTo='opacity-100 translate-y-0 sm:scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 translate-y-0 sm:scale-100'
                leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              >
                <div className='transform transition-all w-96 p-2'>
                  {datepicker}
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
      )}
      {isMedium && showDatepicker && (
        <ClickAwayListener onClickAway={toggleDatepicker}>
          <div
            ref={setPopperElement}
            style={styles.popper}
            {...attributes.popper}
          >
            <div className='w-[17rem]'>{datepicker}</div>
          </div>
        </ClickAwayListener>
      )}
    </div>
  );
}
