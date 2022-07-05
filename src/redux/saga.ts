import { all, fork } from "redux-saga/effects";
import { appSaga } from "./app";

export function* rootSaga() {
	yield all([appSaga].map(fork));
}
