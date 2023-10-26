import { createSelector } from "@reduxjs/toolkit";

const globalState = (state) => state;

export const selectorUser = createSelector(
  globalState,
  ({ user }) => user.data
);

export const selectorUserId = createSelector(
  globalState,
  ({ user }) => user.data.id
);
