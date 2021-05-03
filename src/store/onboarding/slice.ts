import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { initialState } from 'store/onboarding/state';

const onboardingSlice = createSlice({
  name: 'onboarding',
  initialState,
  reducers: {
    updateOnboardingStep(state, action: PayloadAction<number>) {
      state.step = action.payload;
    },
  },
});

export const updateOnboardingStep =
  onboardingSlice.actions.updateOnboardingStep;

export default onboardingSlice.reducer;
