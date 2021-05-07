import * as React from 'react';
import { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';

import { Stepper, Step, StepLabel, Typography, Icon } from '@material-ui/core';
import { Forum, Help } from '@material-ui/icons';
import { getStepLabel } from 'utils/stepperUtils';

import 'components/OnboardingView/Stepper/styles.css';
import { secondaryBlue } from 'utils/styleUtils';

export const steps = [0, 1, 2, 3, 4, 5];

const Branding = (
  <div className="onboarding-stepper-branding">
    <Typography variant="h4">Influence</Typography>
    <Typography variant="h4" style={{ color: secondaryBlue }}>
      &
    </Typography>
  </div>
);

const StepperBottom = (
  <div className="onboarding-stepper-bottom">
    <div>
      <Icon color="disabled">
        <Forum />
      </Icon>
      <Typography variant="body1">Pricing</Typography>
    </div>
    <div>
      <Icon color="disabled">
        <Help />
      </Icon>
      <Typography variant="body1">Help</Typography>
    </div>
  </div>
);

const OnboardingStepper: FunctionComponent = () => {
  const step = useSelector((state: RootState) => state.onboarding.step);

  return (
    <div className="onboarding-stepper">
      {Branding}
      <Stepper orientation="vertical" activeStep={step}>
        {steps.map((ordinal) => (
          <Step key={ordinal}>
            <StepLabel>{getStepLabel(ordinal)}</StepLabel>
          </Step>
        ))}
      </Stepper>
      {StepperBottom}
    </div>
  );
};

export default OnboardingStepper;
