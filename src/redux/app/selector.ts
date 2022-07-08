import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "#redux";

const selfSelector = (state: RootState) => state.app;

export const loadingSelector = createSelector(selfSelector, (state) => state.loading);
