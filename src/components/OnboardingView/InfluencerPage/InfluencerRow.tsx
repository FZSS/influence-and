import * as React from 'react';
import { FunctionComponent } from 'react';
import { Avatar, Typography, Button, Icon } from '@material-ui/core';
import { Link, Forum } from '@material-ui/icons';

export interface InfluencerRowProps {
  id: number;
  name: string;
  avatarUrl: string;
  userName: string;
  followers: string;
  engagements: string;
  category1: string;
  category2: string;
}

const InfluencerRow: FunctionComponent<InfluencerRowProps> = (props) => {
  return (
    <div className="influencer-row">
      <div className="influencer-row-cell influencer-row-count">
        <Typography variant="body1">{props.id}</Typography>
      </div>
      <div className="influencer-row-cell influencer-row-profile">
        <Avatar>{props.id}</Avatar>
      </div>
      <div className="influencer-row-cell influencer-row-name">
        <Typography variant="body1">{props.name}</Typography>
      </div>
      <div className="influencer-row-cell influencer-row-user-name">
        <Typography variant="body1">{props.userName}</Typography>
      </div>
      <div className="influencer-row-cell influencer-row-followers">
        <Typography variant="body1">{props.followers}</Typography>
      </div>
      <div className="influencer-row-cell influencer-row-engagements">
        <Typography variant="body1">{props.engagements}</Typography>
      </div>
      <Typography variant="body1" className="influencer-row-category-cell">
        {props.category1}
      </Typography>
      <Typography variant="body1" className="influencer-row-category-cell">
        {props.category2}
      </Typography>
      <div className="influencer-row-actions">
        <Icon color="primary" className="influencer-row-cell">
          <Link />
        </Icon>
        <Icon color="primary" className="influencer-row-cell">
          <Forum />
        </Icon>
        <Button
          className="influencer-row-cell"
          variant="outlined"
          color="secondary"
        >
          Add to list
        </Button>
      </div>
    </div>
  );
};

export default InfluencerRow;
