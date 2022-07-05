import { createSlice, SliceCaseReducers } from "@reduxjs/toolkit";

interface AppState {
	loading: boolean;
}

const appSlice = createSlice<AppState, SliceCaseReducers<AppState>, string>({
	name: "App",
	initialState: {
		loading: false,
	},
	reducers: {
		setLoading: (state, { payload }) => {
			state.loading = payload;
		},
	},
});

export const { setLoading } = appSlice.actions;

export default appSlice.reducer;
