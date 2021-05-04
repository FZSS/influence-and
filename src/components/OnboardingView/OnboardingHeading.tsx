import * as React from 'react';
import { FunctionComponent } from 'react';
import { Breadcrumbs, Link, Icon, Avatar } from '@material-ui/core';
import { Notifications } from '@material-ui/icons';

// @ts-ignore
import image from '../../images/rachel.png';

const OnboardingHeading: FunctionComponent = () => {
  return (
    <div className="onboarding-header">
      <Breadcrumbs separator="›">
        <Link href="/">Campaigns</Link>
        <Link color="inherit" href="/">
          New Campaign
        </Link>
      </Breadcrumbs>
      <div className="onboarding-header-right">
        <Icon color="disabled">
          <Notifications />
        </Icon>
        <Avatar
          className="onboarding-header-right-avatar"
          alt="Remy Sharp"
          src={image}
        />
      </div>
    </div>
  );
};

export default OnboardingHeading;
