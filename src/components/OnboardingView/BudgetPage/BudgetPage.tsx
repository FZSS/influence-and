import { FunctionComponent } from 'react';
import * as React from 'react';
import {
  List,
  ListItem,
  Typography,
  Checkbox,
  Slider,
  withStyles,
  Input,
  InputAdornment,
  OutlinedInput,
  FormControl,
  InputLabel,
  TextField,
} from '@material-ui/core';

import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

import 'components/OnboardingView/BudgetPage/styles.css';
import DateFnsUtils from '@date-io/date-fns';

const AirbnbSlider = withStyles({
  root: {
    color: '#3a8589',
    height: 3,
    padding: '13px 0',
  },
  thumb: {
    height: 27,
    width: 27,
    backgroundColor: '#fff',
    border: '1px solid currentColor',
    marginTop: -12,
    marginLeft: -13,
    boxShadow: '#ebebeb 0 2px 2px',
    '&:focus, &:hover, &$active': {
      boxShadow: '#ccc 0 2px 3px 1px',
    },
    '& .bar': {
      // display: inline-block !important;
      height: 9,
      width: 1,
      backgroundColor: 'currentColor',
      marginLeft: 1,
      marginRight: 1,
    },
  },
  active: {},
  track: {
    height: 3,
  },
  rail: {
    color: '#d8d8d8',
    opacity: 1,
    height: 3,
  },
})(Slider);

const AirbnbThumbComponent: FunctionComponent = (props) => {
  return (
    <span {...props}>
      <span className="bar" />
      <span className="bar" />
      <span className="bar" />
    </span>
  );
};

const BudgetPage: FunctionComponent = () => {
  const [value, setValue] = React.useState([20, 37]);
  const [selectedDate, setSelectedDate] = React.useState(
    new Date('2021-05-18T21:11:54')
  );

  const handleChange = (
    event: React.ChangeEvent<{}>,
    newValue: number | number[]
  ) => {
    // @ts-ignore
    setValue(newValue);
  };

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
          <div className="onboarding-budget-pricing-slider">
            <AirbnbSlider
              ThumbComponent={AirbnbThumbComponent}
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              aria-labelledby="range-slider"
              getAriaValueText={(value) => `$${value}`}
            />
          </div>
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
            style={{ marginTop: 50, marginBottom: 20 }}
          >
            Please set the schedule of your campaign
          </Typography>

          <TextField
            style={{ maxWidth: 150 }}
            label="Duration"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">Days</InputAdornment>
              ),
            }}
            variant="outlined"
          />
        </div>
        <Typography variant="body1" style={{ marginTop: 50, marginBottom: 20 }}>
          Please set start date of your campaign
        </Typography>

        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            format="MM/dd/yyyy"
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
