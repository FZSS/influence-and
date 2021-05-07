import { FunctionComponent } from 'react';
import * as React from 'react';
import { Button } from '@material-ui/core';
import 'components/OnboardingView/StepperControlButtons/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'store/store';
import { updateOnboardingStep } from 'store/onboarding/slice';
import { steps } from 'components/OnboardingView/Stepper/Stepper';

const StepperControlButtons: FunctionComponent = () => {
  const step = useSelector((state: RootState) => state.onboarding.step);
  const isFindStep = step === steps.length - 2;
  const isLastStep = step === steps.length - 1;
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

  const findStep = (
    <Button
      className="onboarding-stepper-control-buttons-next-button"
      variant="contained"
      color="primary"
      onClick={handleNextClick}
    >
      Find
    </Button>
  );

  let primaryButton = nextStep;
  if (isLastStep) primaryButton = completeStep;
  if (isFindStep) primaryButton = findStep;

  return (
    <div className="onboarding-stepper-control-buttons">
      <Button disabled={isFirstStep} onClick={handleBackClick}>
        Back
      </Button>
      {primaryButton}
    </div>
  );
};

export default StepperControlButtons;
