import * as React from 'react';

import { FunctionComponent } from 'react';
import Stepper from 'components/OnboardingView/Stepper/Stepper';
import StepperControlButtons from 'components/OnboardingView/StepperControlButtons/StepperControlButtons';
import { useSelector } from 'react-redux';
import { RootState } from 'store/store';
import GoalPage from 'components/OnboardingView/GoalPage/GoalPage';
import IndustryPage from 'components/OnboardingView/IndustryPage/IndustryPage';
import 'components/OnboardingView/styles.css';
import OnboardingHeading from 'components/OnboardingView/OnboardingHeading';
import BudgetPage from 'components/OnboardingView/BudgetPage/BudgetPage';

const OnboardingView: FunctionComponent = () => {
  const step = useSelector((state: RootState) => state.onboarding.step);

  let pageContent = null;

  switch (step) {
    case 0:
      pageContent = <GoalPage />;
      break;
    case 1:
      pageContent = <IndustryPage />;
      break;
    case 2:
      pageContent = <BudgetPage />;
      break;
  }

  return (
    <div>
      <div className="onboarding-view">
        <Stepper />
        <div className="onboarding-content">
          <OnboardingHeading />
          {pageContent}
        </div>
      </div>
      <StepperControlButtons />
    </div>
  );
};
export default OnboardingView;
