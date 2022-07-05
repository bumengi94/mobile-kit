import React, { FC, memo } from "react";
import { ActivityIndicator } from "react-native";

const Loading: FC = () => {
	return <ActivityIndicator />;
};

export default memo(Loading);
