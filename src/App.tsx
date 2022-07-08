import React, { FC, lazy, Suspense } from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { store } from "#redux";
import { Loading } from "#components";

const MainRouter = lazy(() => import("#routers"));

const App: FC = () => {
	return (
		<Suspense fallback={<Loading />}>
			<Provider store={store}>
				<NavigationContainer>
					<MainRouter />
				</NavigationContainer>
			</Provider>
		</Suspense>
	);
};

export default App;
