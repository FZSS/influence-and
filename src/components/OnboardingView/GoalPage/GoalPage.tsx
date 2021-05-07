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
            <Typography variant="body1">Brand Awareness</Typography>
          </ListItem>
          <ListItem>
            <Checkbox color="primary" />
            <Typography variant="body1">Traffic</Typography>
          </ListItem>
          <ListItem>
            <Checkbox color="primary" />
            <Typography variant="body1">Sales and Lead Generation</Typography>
          </ListItem>
          <ListItem>
            <Checkbox color="primary" />
            <Typography variant="body1">
              Social Media Followers and Engagement
            </Typography>
          </ListItem>
          <ListItem>
            <Checkbox color="primary" />
            <Typography variant="body1">Reputation</Typography>
          </ListItem>
        </List>
      </div>
    </div>
  );
};

export default GoalPage;
