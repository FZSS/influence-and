import { FunctionComponent } from 'react';
import * as React from 'react';
import { Typography, MenuItem, Select, Icon } from '@material-ui/core';
import { Room, Wc, HourglassFull, Public } from '@material-ui/icons';
import 'components/OnboardingView/AudiencePage/styles.css';

const AudiencePage: FunctionComponent = () => {
  const [age, setAge] = React.useState('Any');
  const [location, setLocation] = React.useState('Any');
  const [gender, setGender] = React.useState('Any');
  const [ethnicity, setEthnicity] = React.useState('Any');
  const [interests, setInterests] = React.useState('Any');

  const handleAgeChange: any = (event: any) => setAge(event.target.value);
  const handleLocationChange: any = (event: any) =>
    setLocation(event.target.value);

  const handleGenderChange: any = (event: any) => setGender(event.target.value);
  const handleEthnicityChange: any = (event: any) =>
    setEthnicity(event.target.value);
  const handleInterestsChange: any = (event: any) =>
    setInterests(event.target.value);

  return (
    <div>
      <div>
        <Typography variant="h5">Audience</Typography>
        <Typography variant="body2" style={{ color: 'grey' }}>
          Define who you want your product to reach
        </Typography>
      </div>
      <div className="onboarding-list">
        <Typography variant="body1">
          Please choose the following preferences of the audience (select
          multiple if apply).
        </Typography>
        <div className="audience-preferences">
          <div className="audience-preference">
            <div className="audience-select-label">
              <Icon color="disabled" className="audience-select-label-icon">
                <Room />
              </Icon>
              <Typography variant="body2">Location</Typography>
            </div>
            <Select
              className="audience-select"
              value={location}
              variant="outlined"
              onChange={handleLocationChange}
            >
              <MenuItem value="Any">Any</MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </div>
          <div className="audience-preference">
            <div className="audience-select-label">
              <Icon color="disabled" className="audience-select-label-icon">
                <Wc />
              </Icon>
              <Typography variant="body2">Gender</Typography>
            </div>

            <Select
              className="audience-select"
              value={gender}
              variant="outlined"
              onChange={handleGenderChange}
            >
              <MenuItem value="Any">Any</MenuItem>
            </Select>
          </div>

          <div className="audience-preference">
            <div className="audience-select-label">
              <Icon color="disabled" className="audience-select-label-icon">
                <HourglassFull />
              </Icon>
              <Typography variant="body2">Age</Typography>
            </div>

            <Select
              className="audience-select"
              value={age}
              variant="outlined"
              onChange={handleAgeChange}
            >
              <MenuItem value="Any">Any</MenuItem>
            </Select>
          </div>
          <div className="audience-preference">
            <div className="audience-select-label">
              <Icon color="disabled" className="audience-select-label-icon">
                <Public />
              </Icon>
              <Typography variant="body2">Ethnicity</Typography>
            </div>

            <Select
              className="audience-select"
              value={ethnicity}
              variant="outlined"
              onChange={handleEthnicityChange}
            >
              <MenuItem value="Any">Any</MenuItem>
            </Select>
          </div>
          <div className="audience-preference">
            <div className="audience-select-label">
              <Icon color="disabled" className="audience-select-label-icon">
                <Wc />
              </Icon>
              <Typography variant="body2">Gender</Typography>
            </div>

            <Select
              className="audience-select"
              value={gender}
              variant="outlined"
              onChange={handleGenderChange}
            >
              <MenuItem value="Any">Any</MenuItem>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudiencePage;
