import React from "react";

import Container from "@/components/inscripcion/container";

export interface step3Data {
  city: string;
  address: string;
}

interface step3Props {
  value?: step3Data;
  onChange?: (data: Partial<step3Data>) => void;
  onNext?: () => void;
  onPrev?: () => void;
}

export function step3CheckInputs(val?: any) {
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

export default function Step3({ value, onChange, onNext, onPrev }: step3Props) {
  const newValue = value ?? ({ city: "", address: "" } as step3Data);
  const { city, address } = newValue;

  const [areValid, setAreValid] = React.useState(step3CheckInputs(newValue));

  const changeInscriptionData = ({
    currentTarget: _,
  }: React.ChangeEvent<HTMLInputElement>) => {
    let val = _.value;

    const nextVal = { ...(newValue ?? {}), [_.name]: val };
    setAreValid(step3CheckInputs(nextVal));
    onChange?.(nextVal);
  };

  return (
    <Container
      name='Dirección'
      onNext={onNext}
      onPrev={onPrev}
      allRequiered
      areInputsValid={areValid}
      inputs={[
        {
          name: "city",
          label: "Ciudad",
          type: "text",
          value: city,
          onChange: changeInscriptionData,
        },
        {
          name: "address",
          label: "Domicilio",
          type: "text",
          autoComplete: "street-address",
          value: address,
          onChange: changeInscriptionData,
        },
      ]}
    />
  );
}
