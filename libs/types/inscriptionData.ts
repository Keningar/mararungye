import type { step0Data } from '@/components/inscripcion/step0';
import type { step1Data } from '@/components/inscripcion/step1';
import type { step2Data } from '@/components/inscripcion/step2';
import type { step3Data } from '@/components/inscripcion/step3';
import type { shirtData } from '@/components/inscripcion/shirt';

export interface InsData
  extends step0Data,
    step1Data,
    step2Data,
    step3Data,
    shirtData {}


    /*
const sd: InsData = {
  event,

  distancia,

  grupo,

  firstName, lastName, secondName, secondLastName,

  age,

  country, city, address,

  phone,

  birthday,

  ci,

  email,

sex,

especial,

talla
}

*/