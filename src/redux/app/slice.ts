import { createAction, createSlice, SliceCaseReducers } from "@reduxjs/toolkit";

interface AppState {
	loading: boolean;
}

const slice = createSlice<AppState, SliceCaseReducers<AppState>, string>({
	name: "App",
	initialState: {
		loading: false,
	},
	reducers: {
		setLoadingSuccess: (state, { payload }) => {
			state.loading = payload;
		},
	},
});

export const { setLoadingSuccess } = slice.actions;

export const setLoading = createAction<boolean>("setLoading");

export default slice.reducer;
