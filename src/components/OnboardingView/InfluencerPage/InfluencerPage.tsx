import { FunctionComponent, useEffect, useState } from 'react';
import * as React from 'react';
import {
  List,
  ListItem,
  Typography,
  Checkbox,
  LinearProgress,
  Avatar,
  Icon,
  Button,
} from '@material-ui/core';

import 'components/OnboardingView/InfluencerPage/styles.css';
import { InfluencerRowProps } from 'components/OnboardingView/InfluencerPage/InfluencerRow';
import InfluencerRow from 'components/OnboardingView/InfluencerPage/InfluencerRow';
import { Forum, Link } from '@material-ui/icons';

const influencers: InfluencerRowProps[] = [
  {
    id: 1,
    name: 'Justin Bieber',
    userName: '@justinbieber',
    avatarUrl: '123',
    followers: '10M',
    engagements: '100M',
    category1: 'Fashion',
    category2: 'Music',
  },
  {
    id: 1,
    name: 'Justin Bieber',
    userName: '@justinbieber',
    avatarUrl: '123',
    followers: '10M',
    engagements: '100M',
    category1: 'Fashion',
    category2: 'Music',
  },
  {
    id: 1,
    name: 'Justin Bieber',
    userName: '@justinbieber',
    avatarUrl: '123',
    followers: '10M',
    engagements: '100M',
    category1: 'Fashion',
    category2: 'Music',
  },
  {
    id: 1,
    name: 'Justin Bieber',
    userName: '@justinbieber',
    avatarUrl: '123',
    followers: '10M',
    engagements: '100M',
    category1: 'Fashion',
    category2: 'Music',
  },
  {
    id: 1,
    name: 'Justin Bieber',
    userName: '@justinbieber',
    avatarUrl: '123',
    followers: '10M',
    engagements: '100M',
    category1: 'Fashion',
    category2: 'Music',
  },
];

const LOADING_TIME = 3000;

const loader = (
  <div className="onboarding-influencers">
    <div className="onboarding-influencers-progress-bar">
      <LinearProgress />
      <Typography
        variant="body1"
        className="onboarding-influencers-progress-text"
      >
        Finding the best influencers for your campaign...
      </Typography>
    </div>
  </div>
);

const headerRow = (
  <div className="influencer-row influencer-row-header">
    <div className="influencer-row-cell influencer-row-count">
      <Typography variant="body2">#</Typography>
    </div>
    <div className="influencer-row-cell influencer-row-profile">
      <Typography variant="body2">Profile</Typography>
    </div>
    <div className="influencer-row-cell influencer-row-name">
      <Typography variant="body2">Name</Typography>
    </div>

    <div className="influencer-row-cell influencer-row-user-name">
      <Typography variant="body2">User Name</Typography>
    </div>
    <div className="influencer-row-cell influencer-row-followers">
      <Typography variant="body2">Followers</Typography>
    </div>
    <div className="influencer-row-cell influencer-row-engagements">
      <Typography variant="body2">Engagements</Typography>
    </div>
    <Typography variant="body2" className="influencer-row-cell">
      Industries
    </Typography>
  </div>
);

const InfluencerPage: FunctionComponent = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, LOADING_TIME);
  }, []);

  if (loading) return loader;

  return (
    <div>
      <Typography variant="h5">Influencers</Typography>
      <Typography variant="body2" style={{ color: 'grey' }}>
        We recommend the following influencers to your campaign
      </Typography>
      <div className="onboarding-influencers-recommendations">
        {headerRow}
        {influencers.map((influencer) => (
          <InfluencerRow
            id={influencer.id}
            name={influencer.name}
            avatarUrl={influencer.avatarUrl}
            userName={influencer.userName}
            followers={influencer.followers}
            engagements={influencer.engagements}
            category1={influencer.category1}
            category2={influencer.category2}
          />
        ))}
      </div>
    </div>
  );
};

export default InfluencerPage;
