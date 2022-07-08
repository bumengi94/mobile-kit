import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../store";

const selfSelector = (state: RootState) => state.app;

export const loadingSelector = createSelector(selfSelector, (state) => state.loading);
