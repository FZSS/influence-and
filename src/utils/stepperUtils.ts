export const getStepLabel = (stepOrdinal: number) => {
  switch (stepOrdinal) {
    case 0:
      return 'Goal';
    case 1:
      return 'Budget & Schedule';
    case 2:
      return 'Audience';
    case 3:
      return 'Placement';
    case 4:
      return 'Influencer Preference';
    case 5:
      return 'Content Creation';
    default:
      return '';
  }
};
