import { all, call, fork, put, takeLatest } from "redux-saga/effects";
import { loadingAPI } from "./api";
import { AnyAction } from "redux";
import { setLoading, setLoadingFail, setLoadingSuccess } from "./action";

export function* appSaga() {
	yield all([loadingWatcher].map(fork));
}

function* loadingWatcher() {
	yield takeLatest(setLoading.type, loadingWorker);
}

function* loadingWorker(action: AnyAction) {
	try {
		yield call(loadingAPI);
		yield put(setLoadingSuccess(action.payload));
	} catch (e) {
		yield put(setLoadingFail(false));
	}
}
