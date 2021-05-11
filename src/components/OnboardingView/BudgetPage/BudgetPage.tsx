import { FunctionComponent } from 'react';
import * as React from 'react';
import { Typography, InputAdornment, TextField } from '@material-ui/core';

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import 'components/OnboardingView/BudgetPage/styles.css';
import DateFnsUtils from '@date-io/date-fns';

const BudgetPage: FunctionComponent = () => {
  const [value, setValue] = React.useState([20, 37]);
  const [selectedDate, setSelectedDate] = React.useState(
    new Date('2021-05-18T21:11:54')
  );

  const handleDateChange: any = (date: any) => setSelectedDate(date);

  return (
    <div>
      <div>
        <div>
          <Typography variant="h5">Budget & Schedule</Typography>
          <Typography variant="body2" style={{ color: 'grey' }}>
            Set the budget and schedule of your campaign
          </Typography>
        </div>
        <div className="onboarding-list">
          <Typography variant="body1">
            Please set the budget of your campaign
          </Typography>
          <div className="onboarding-budget-pricing-inputs">
            <TextField
              style={{ maxWidth: 150 }}
              label="Minimum"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">$</InputAdornment>
                ),
              }}
              variant="outlined"
            />
            <TextField
              style={{ maxWidth: 150 }}
              className="onboarding-budget-pricing-input-2"
              label="Maximum"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">$</InputAdornment>
                ),
              }}
              variant="outlined"
            />
          </div>

          <Typography
            variant="body1"
            style={{ marginTop: 30, marginBottom: 20 }}
          >
            Please set the schedule of your campaign
          </Typography>

          <TextField
            style={{ maxWidth: 150, marginLeft: 15 }}
            label="Duration"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">Days</InputAdornment>
              ),
            }}
            variant="outlined"
          />
        </div>
        <Typography variant="body1" style={{ marginTop: 30, marginBottom: 20 }}>
          Please set start date of your campaign
        </Typography>

        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            margin="normal"
            format="MM/dd/yyyy"
            style={{ paddingLeft: 15 }}
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </MuiPickersUtilsProvider>
      </div>
    </div>
  );
};

export default BudgetPage;
