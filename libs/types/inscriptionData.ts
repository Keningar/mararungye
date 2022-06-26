import type { step1Data } from "@/components/inscripcion/step1";
import type { step2Data } from "@/components/inscripcion/step2";
import type { step3Data } from "@/components/inscripcion/step3";

export interface InsData extends step1Data, step2Data, step3Data {
  event: string;
}