import { createSlice, SliceCaseReducers } from "@reduxjs/toolkit";

interface AppState {
	loading: boolean;
}

const slice = createSlice<AppState, SliceCaseReducers<AppState>, string>({
	name: "App",
	initialState: {
		loading: false,
	},
	reducers: {
		SET_LOADING_SUCCESS: (state, { payload }) => {
			state.loading = payload;
		},
	},
});

export default slice.reducer;
