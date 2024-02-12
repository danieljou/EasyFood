/** @format */

import { Dimensions, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { Image, StatusBar, Text, VStack, View } from "native-base";
import { image } from "../constants/images";

const Home = () => {
	return (
		// <SafeAreaView>
		<VStack
			background={"orange.500"}
			height={"full"}
			w={"full"}
			display={"flex"}
			justifyContent={"center"}
			alignItems={"center"}
			style={{
				height: Dimensions.get("screen").height,
				width: Dimensions.get("screen").width,
			}}>
			<View
				width={250}
				height={250}
				padding={6}
				rounded={"full"}
				// colorScheme={"black"}
				backgroundColor={"light.300"}>
				<View
					width={"full"}
					height={"full"}
					rounded={"full"}
					padding={6}
					// colorScheme={"black"}
					backgroundColor="light.200">
					<View
						width={"full"}
						height={"full"}
						rounded={"full"}
						padding={3}
						// colorScheme={"black"}
						backgroundColor="light.100">
						<Image source={image.logo} alt="logo" w={"full"} h={"full"} />
					</View>
				</View>
			</View>
		</VStack>
	);
};

export default Home;

const styles = StyleSheet.create({});
