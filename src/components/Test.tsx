import React, { FC, memo } from "react";
import { Pressable, SafeAreaView, Text } from "react-native";
import { useAppDispatch, useAppSelector } from "../utils";
import { setLoading } from "../redux";
import { useTranslation } from "react-i18next";

const Test: FC = () => {
	const loading = useAppSelector((state) => state.app.loading);
	const d = useAppDispatch();
	const { t } = useTranslation();

	return (
		<SafeAreaView>
			<Pressable onPress={() => d(setLoading(!loading))}>
				<Text>{loading.toString()}</Text>
				<Text>{t("hi")}</Text>
			</Pressable>
		</SafeAreaView>
	);
};

export default memo(Test);
