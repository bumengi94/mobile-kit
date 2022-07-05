import React, { FC, lazy, StrictMode, Suspense } from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import { Loading } from "./components";

const Test = lazy(() => import("./components/Test"));

const App: FC = () => {
	return (
		<StrictMode>
			<Suspense fallback={<Loading />}>
				<Provider store={store}>
					<Test />
				</Provider>
			</Suspense>
		</StrictMode>
	);
};

export default App;
