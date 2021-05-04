import { FunctionComponent } from 'react';
import * as React from 'react';
import { Button } from '@material-ui/core';
import 'components/OnboardingView/StepperControlButtons/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/store';
import { updateOnboardingStep } from 'store/onboarding/slice';

const StepperControlButtons: FunctionComponent = () => {
  const step = useSelector((state: RootState) => state.onboarding.step);
  const isLastStep = step === 6;
  const isFirstStep = step === 0;
  const dispatch = useDispatch();

  const handleNextClick = () => {
    dispatch(updateOnboardingStep(step + 1));
  };

  const handleBackClick = () => {
    dispatch(updateOnboardingStep(step - 1));
  };

  const nextStep = (
    <Button
      className="onboarding-stepper-control-buttons-next-button"
      variant="contained"
      color="primary"
      onClick={handleNextClick}
    >
      Next
    </Button>
  );

  const completeStep = (
    <Button
      className="onboarding-stepper-control-buttons-next-button"
      variant="contained"
      color="primary"
    >
      Complete
    </Button>
  );

  return (
    <div className="onboarding-stepper-control-buttons">
      <Button disabled={isFirstStep} onClick={handleBackClick}>
        Back
      </Button>
      {isLastStep ? completeStep : nextStep}
    </div>
  );
};

export default StepperControlButtons;
