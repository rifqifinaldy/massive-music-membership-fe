import { RootState } from "@MME-redux/store";
import { createSelector } from "@reduxjs/toolkit";

export const MEMBERS_SELECTOR = (state: RootState) => state.members;

export const MEMBERS_SELECTOR_COLLECTION = createSelector(
  MEMBERS_SELECTOR,
  (state) => state,
  {
    devModeChecks: { identityFunctionCheck: "never" },
  }
);
