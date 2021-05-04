import { FunctionComponent } from 'react';
import * as React from 'react';
import { List, ListItem, Typography, Checkbox } from '@material-ui/core';

const industries = [
  'Business Service',
  'Food and Restaurant',
  'General Retail',
  'Health, Beauty and Fitness',
  'Automotive',
  'In-home Care',
  'Technology',
  'Cleaning',
  'Travel and Lodging',
  'Sports and Recreation',
  'Other',
];

const IndustryPage: FunctionComponent = () => {
  return (
    <div>
      <div>
        <Typography variant="h5">Industry</Typography>
        <Typography variant="body2" style={{ color: 'grey' }}>
          Specify the industry of your business
        </Typography>
      </div>
      <div className="onboarding-list">
        <Typography variant="body1">
          Please select the related industry (select multiple if apply).
        </Typography>
        <List className="onboarding-list-items">
          {industries.map((industry) => (
            <ListItem key="industry">
              <Checkbox color="primary" />
              <Typography variant="body1">{industry}</Typography>
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
};

export default IndustryPage;
