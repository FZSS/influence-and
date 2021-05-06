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
import AudiencePage from 'components/OnboardingView/AudiencePage/AudiencePage';
import PlacementPage from 'components/OnboardingView/PlacementPage/PlacementPage';
import InfluencerPage from 'components/OnboardingView/InfluencerPage/InfluencerPage';

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
    case 3:
      pageContent = <AudiencePage />;
      break;
    case 4:
      pageContent = <PlacementPage />;
      break;
    case 5:
      pageContent = <InfluencerPage />;
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
