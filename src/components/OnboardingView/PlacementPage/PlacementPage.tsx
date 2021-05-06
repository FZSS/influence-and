import { FunctionComponent } from 'react';
import * as React from 'react';
import { List, ListItem, Typography, Checkbox } from '@material-ui/core';

const PlacementPage: FunctionComponent = () => {
  return (
    <div>
      <div>
        <Typography variant="h5">Placement</Typography>
        <Typography variant="body2" style={{ color: 'grey' }}>
          Pick the target platforms of your campaign
        </Typography>
      </div>
      <div className="onboarding-list">
        <List className="onboarding-list-items">
          <ListItem>
            <Checkbox color="primary" />
            <Typography variant="body1">Facebook</Typography>
          </ListItem>
          <ListItem>
            <Checkbox color="primary" />
            <Typography variant="body1">Instagram</Typography>
          </ListItem>
          <ListItem>
            <Checkbox color="primary" />
            <Typography variant="body1">Youtube</Typography>
          </ListItem>
          <ListItem>
            <Checkbox color="primary" />
            <Typography variant="body1">Tik Tok</Typography>
          </ListItem>
          <ListItem>
            <Checkbox color="primary" />
            <Typography variant="body1">Snapchat</Typography>
          </ListItem>
        </List>
      </div>
    </div>
  );
};

export default PlacementPage;
