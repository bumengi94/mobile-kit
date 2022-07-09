import React, { FC, lazy, Suspense, useEffect } from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { store } from "#redux";
import { Loading } from "#components";
import { navRef } from "#utils/navigation";
import LottieSplashScreen from "react-native-lottie-splash-screen";

const MainRouter = lazy(() => import("#routers"));

const App: FC = () => {
	useEffect(() => {
		setTimeout(() => LottieSplashScreen.hide(), 1200);
	}, []);

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
