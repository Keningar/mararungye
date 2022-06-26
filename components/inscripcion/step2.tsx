import React from "react";

import Container from "@/components/inscripcion/container";

export interface step2Data {
  email: string;
  phone: string;
}

interface step2Props {
  value?: step2Data;
  onChange?: (data: Partial<step2Data>) => void;
  onNext?: () => void;
  onPrev?: () => void;
}

export function step2CheckInputs(val?: any) {
  if (!val) return false;

  const inputsKeys = Object.keys(val);

  return (
    inputsKeys.length == 2 &&
    inputsKeys.every(_ => {
      const currVal = val[_];
      return typeof currVal == "string" && currVal != "";
    })
  );
}

export default function Step2({ value, onChange, onNext, onPrev }: step2Props) {
  const newValue = value ?? ({ email: "", phone: "" } as step2Data);
  const { email, phone } = newValue;

  const [areValid, setAreValid] = React.useState(step2CheckInputs(newValue));

  const changeInscriptionData = ({
    currentTarget: _,
  }: React.ChangeEvent<HTMLInputElement>) => {
    let val = _.value;
    if (_.name == "phone") val = _.value.match(/\d+/)?.[0] ?? "";

    const nextVal = { ...(newValue ?? {}), [_.name]: val };
    setAreValid(step2CheckInputs(nextVal));
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
          name: "email",
          label: "Email",
          type: "email",
          autoComplete: "email",
          value: email,
          onChange: changeInscriptionData,
        },
        {
          name: "phone",
          label: "Celular",
          type: "tel",
          autoComplete: "tel",
          value: phone,
          onChange: changeInscriptionData,
        },
      ]}
    />
  );
}
