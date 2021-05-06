import * as React from 'react';
import 'components/styles.css';
import OnboardingView from 'components/OnboardingView/OnboardingView';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import { accentPurple, primaryPurple, secondaryBlue } from 'utils/styleUtils';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primaryPurple,
      light: accentPurple,
      contrastText: '#ffff',
    },
    secondary: {
      main: secondaryBlue,
      contrastText: '#ffff',
    },
  },
});

const App: React.FunctionComponent = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="app-view">
        <OnboardingView />
      </div>
    </MuiThemeProvider>
  );
};

export default App;
