import * as React from 'react';

import { FunctionComponent } from 'react';
import Stepper from 'components/OnboardingView/Stepper/Stepper';
import StepperControlButtons from 'components/OnboardingView/StepperControlButtons/StepperControlButtons';

const OnboardingView: FunctionComponent = () => {
  return (
    <div>
      <Stepper />
      <StepperControlButtons />
    </div>
  );
};
export default OnboardingView;
