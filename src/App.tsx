import React, { FC, lazy, Suspense } from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { store } from "#redux";
import { Loading } from "#components";
import { navRef } from "#utils/navigation";

const MainRouter = lazy(() => import("#routers"));

const App: FC = () => {
	return (
		<Suspense fallback={<Loading />}>
			<Provider store={store}>
				<NavigationContainer ref={navRef}>
					<MainRouter />
				</NavigationContainer>
			</Provider>
		</Suspense>
	);
};

export default App;
