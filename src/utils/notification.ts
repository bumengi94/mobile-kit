import PushNotification from "react-native-push-notification";

PushNotification.configure({
	permissions: {
		alert: true,
		badge: true,
		sound: true,
	},
	popInitialNotification: true,
	requestPermissions: true,
});
