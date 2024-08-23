import { useState } from 'react';

const serviceOrderFormStep = (initialStep = 1, totalSteps = 5) => {
  const [step, setStep] = useState(initialStep);

  const nextStep = () => {
    if (step < totalSteps) {
      setStep(prevStep => prevStep + 1);
    }
  };

  const previousStep = () => {
    if (step > 1) {
      setStep(prevStep => prevStep - 1);
    }
  };

  return { step, nextStep, previousStep, isFirstStep: step === 1, isLastStep: step === totalSteps };
};

export default serviceOrderFormStep;
