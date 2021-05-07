import { FunctionComponent, useEffect, useState } from 'react';
import * as React from 'react';
import { Typography, LinearProgress } from '@material-ui/core';

import 'components/OnboardingView/InfluencerPage/styles.css';
import { InfluencerRowProps } from 'components/OnboardingView/InfluencerPage/InfluencerRow';
import InfluencerRow from 'components/OnboardingView/InfluencerPage/InfluencerRow';

const influencers: InfluencerRowProps[] = [
  {
    id: 1,
    name: 'Jackie Gebel',
    userName: '@noleftovers',
    avatarUrl: 'JG',
    followers: '45k',
    engagements: '0.3%',
    category1: 'Food',
    category2: 'Restaurants',
  },
  {
    id: 2,
    name: 'Lina',
    userName: '@thesweetlifeoflina',
    avatarUrl: 'L',
    followers: '45K',
    engagements: '1.3%',
    category1: 'Travel',
    category2: 'Restaurants',
  },
  {
    id: 3,
    name: 'Alexa Mathews',
    userName: '@eatingnyc',
    avatarUrl: 'AM',
    followers: '310K',
    engagements: '0.5%',
    category1: 'NYC',
    category2: 'Food',
  },
  {
    id: 4,
    name: 'Tina Liu-Rann',
    userName: '@tinaeats_',
    avatarUrl: 'TL',
    followers: '28K',
    engagements: '0.8%',
    category1: 'Lifestyle',
    category2: 'Food',
  },
  {
    id: 5,
    name: 'Katina',
    userName: '@katinaeatskilos',
    avatarUrl: 'K',
    followers: '42K',
    engagements: '4.1%',
    category1: 'Fashion',
    category2: 'Food',
  },
  {
    id: 6,
    name: 'Colu Henry',
    userName: '@katinaeatskilos',
    avatarUrl: 'CH',
    followers: '3K',
    engagements: '1.3%',
    category1: 'Cooking',
    category2: 'Food',
  },
  {
    id: 7,
    name: 'Christine T. Ferguson',
    userName: '@tourdelust',
    avatarUrl: 'CTF',
    followers: '380K',
    engagements: '1.4%',
    category1: 'Liefstyle',
    category2: 'Food',
  },
  {
    id: 8,
    name: 'Stephanie',
    userName: '@adventuresofchephanie',
    avatarUrl: 'S',
    followers: '14K',
    engagements: '2.4%',
    category1: 'Travel',
    category2: 'Food',
  },
];

const LOADING_TIME = 2000;

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
      <Typography variant="body2">Engagement</Typography>
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
