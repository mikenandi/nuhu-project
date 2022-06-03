import React, {memo} from "react";
import {
	View,
	Button,
	StyleSheet,
	TouchableOpacity,
	StatusBar,
} from "react-native";
import color from "../../color";
import {Body} from "../../typography";
import {Ionicons} from "@expo/vector-icons";
import TopBar from "../TopBar";

function Notification(props) {
	return (
		<View style={styles.screen}>
			<StatusBar backgroundColor='white' />
			<TopBar />
			<View>
				<Body>notifications</Body>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		backgroundColor: "white",
	},
	drawerContainer: {
		marginLeft: 10,
		marginVertical: 5,
		backgroundColor: "white",
		width: 50,
		height: 50,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 25,
		padding: 5,
	},
});

export default memo(Notification);