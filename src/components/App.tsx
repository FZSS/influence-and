import * as React from 'react';
import 'components/styles.css';
import OnboardingView from 'components/OnboardingView/OnboardingView';

const App: React.FunctionComponent = () => {
  return (
    <div className="app-view">
      <OnboardingView />
    </div>
  );
};

export default App;
