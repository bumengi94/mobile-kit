import { createAction } from "@reduxjs/toolkit";

export const setLoading = createAction<boolean>("App/SET_LOADING");
export const setLoadingSuccess = createAction<boolean>("App/SET_LOADING_SUCCESS");
export const setLoadingFail = createAction<boolean>("App/SET_LOADING_FAIL");
