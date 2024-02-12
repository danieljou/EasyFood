/** @format */

import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import { StyleSheet, Text, View } from "react-native";
import Home from "./screens/Home";

export default function App() {
	return (
		<NativeBaseProvider>
			<Home />
			<StatusBar backgroundColor="red" />
		</NativeBaseProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
