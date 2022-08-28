import React from "react";
import { Form, Formik, FormikHelpers } from "formik";
import styles from "./MultiStepForm.module.css";

export interface StepData {
  label: string;
  component: React.ReactElement | JSX.Element;
}
interface NextButtonProps {
  isLastStep: boolean;
}
interface StepSubmit<T = {}> {
  values: T;
  nextIndex: number;
  isLastStep: boolean;
  helpers: FormikHelpers<T>;
}
interface MultiStepFormProps<T = {}> {
  steps: StepData[];
  initialStep?: number;
  initialValues?: T;
  onNext?: (stepSubmitData: StepSubmit<T>) => void;
  onPrev?: (prevIndex: number) => void;
  prevButton?: (onPrevClick?: () => void) => JSX.Element;
  nextButton?: (props: NextButtonProps) => JSX.Element;
  classes?: {
    form?: string;
    label?: string;
    buttonsContainer?: string;
  };
}

const defaultPrevButton = (onPrevClick: () => void) => (
  <button style={{ marginRight: "16px" }} onClick={onPrevClick}>
    Previous
  </button>
);
const defaultNextButton = ({ isLastStep }: NextButtonProps) => (
  <button
    type="submit"
    // disabled={isLastStep ? !isPreviousStepsValid : false}
  >
    {isLastStep ? "Submit" : "Next"}
  </button>
);

export default function MultiStepForm<T = {}>(props: MultiStepFormProps<T>) {
  const {
    steps,
    initialStep = 0,
    initialValues = {} as T,
    prevButton = defaultPrevButton,
    nextButton = defaultNextButton,
    onNext,
    onPrev,
    classes,
  } = props;

  const [step, setStep] = React.useState(initialStep);
  const [formState, setFormState] = React.useState(initialValues);

  const lastStepIndex = steps.length - 1;
  const isLastStep = lastStepIndex === step;

  const _onStepSubmit = React.useCallback(
    (values: T, _: FormikHelpers<T>) => {
      const nextIndex = Math.min(step + 1, lastStepIndex);
      setStep(nextIndex);
      setFormState(values);
      onNext?.({ values, nextIndex, helpers: _, isLastStep });
    },
    [step, setStep, setFormState, lastStepIndex, isLastStep]
  );

  const onPrevClick = React.useCallback(() => {
    const prevIndex = Math.max(step - 1, 0);
    setStep(prevIndex);
    onPrev?.(prevIndex);
  }, [step, setStep]);

  const currentStep = steps[step];
  return (
    <Formik initialValues={formState} onSubmit={_onStepSubmit}>
      <Form className={`${styles["_form"]} ${classes?.form ?? ""}`}>
        <h2 className={classes?.label ?? ""}>{currentStep.label}</h2>
        {currentStep.component}
        <div className={classes?.buttonsContainer ?? ""}>
          {step !== 0 && prevButton(onPrevClick)}
          {nextButton({ isLastStep })}
        </div>
      </Form>
    </Formik>
  );
}
