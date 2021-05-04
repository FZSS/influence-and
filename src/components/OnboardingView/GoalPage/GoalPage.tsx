import { FunctionComponent } from 'react';
import * as React from 'react';
import { List, ListItem, Typography, Checkbox } from '@material-ui/core';

const GoalPage: FunctionComponent = () => {
  return (
    <div>
      <div>
        <Typography variant="h5">Goal</Typography>
        <Typography variant="body2" style={{ color: 'grey' }}>
          Define the goal of your campaign
        </Typography>
      </div>
      <div className="onboarding-list">
        <Typography variant="body1">
          Please select the goals you want to accomplish for your campaign
          (select multiple if apply).
        </Typography>
        <List className="onboarding-list-items">
          <ListItem>
            <Checkbox color="primary" />
            <Typography variant="body1">Improve conversions</Typography>
          </ListItem>
          <ListItem>
            <Checkbox color="primary" />
            <Typography variant="body1">
              Gain customer insight and data
            </Typography>
          </ListItem>
          <ListItem>
            <Checkbox color="primary" />
            <Typography variant="body1">
              Build brand awareness and strength
            </Typography>
          </ListItem>
          <ListItem>
            <Checkbox color="primary" />
            <Typography variant="body1">
              Increase engagement and interactions
            </Typography>
          </ListItem>
        </List>
      </div>
    </div>
  );
};

export default GoalPage;
