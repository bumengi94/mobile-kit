import React, { FC, memo } from "react";
import { Pressable, SafeAreaView, Text } from "react-native";
import { useAppDispatch, useAppSelector } from "../utils/hooks";
import { setLoading } from "../store/appSlice";

const Test: FC = () => {
	const loading = useAppSelector((state) => state.app.loading);
	const d = useAppDispatch();

	return (
		<SafeAreaView>
			<Pressable onPress={() => d(setLoading(!loading))}>
				<Text>{loading.toString()}</Text>
			</Pressable>
		</SafeAreaView>
	);
};

export default memo(Test);
