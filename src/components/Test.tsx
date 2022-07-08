import React, { FC, memo } from "react";
import { Pressable, SafeAreaView, Text } from "react-native";
import { useAppDispatch, useAppSelector } from "#utils";
import { setLoading } from "#redux";
import { loadingSelector } from "#redux/app/selector";
import { useTranslation } from "react-i18next";

const Test: FC = () => {
	const loading = useAppSelector(loadingSelector);
	const d = useAppDispatch();
	const { t } = useTranslation();

	return (
		<SafeAreaView>
			<Pressable onPress={() => d(setLoading(!loading))}>
				<Text>{t("hi")}</Text>
				<Text>{loading.toString()}</Text>
			</Pressable>
		</SafeAreaView>
	);
};

export default memo(Test);
