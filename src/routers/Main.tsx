import React, { FC, lazy } from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Test = lazy(() => import("#components/Test"));

const { Navigator, Screen } = createStackNavigator();

const MainRouter: FC = () => {
	return (
		<Navigator screenOptions={{}}>
			<Screen name={"Test"} component={Test} />
		</Navigator>
	);
};

export default MainRouter;
