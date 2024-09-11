import React, { useState } from "react";
import { SafeAreaView, View, ScrollView, Text, StyleSheet, TouchableOpacity } from "react-native";

// Hàm để sinh mật khẩu ngẫu nhiên
const generateRandomPassword = () => {
	const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
	let password = "";
	for (let i = 0; i < 6; i++) {
		const randomIndex = Math.floor(Math.random() * characters.length);
		password += characters[randomIndex];
	}
	return password;
};

export default () => {
	const [password, setPassword] = useState("");

	// Xử lý sự kiện khi nhấn nút
	const handleGeneratePassword = () => {
		const newPassword = generateRandomPassword();
		setPassword(newPassword);
	};

	return (
		<SafeAreaView style={styles.safeArea}>
			<ScrollView style={styles.scrollView}>
				<View style={styles.contentContainer}>
					<View style={styles.card}>
						<Text style={styles.titleText}>{"PASSWORD GENERATOR"}</Text>
						<View style={styles.generatedPasswordContainer}>
							<Text style={styles.generatedPasswordText}>{password}</Text>
						</View>
						<View style={styles.optionContainer}>
							<Text style={styles.optionText}>{"Password length"}</Text>
							<View style={styles.inputBox}></View>
						</View>
						<View style={styles.optionContainer}>
							<Text style={styles.optionText}>{"Include lower case letters"}</Text>
							<View style={styles.checkBox}></View>
						</View>
						<View style={styles.optionContainer}>
							<Text style={styles.optionText}>{"Include upcase letters"}</Text>
							<View style={styles.checkBox}></View>
						</View>
						<View style={styles.optionContainer}>
							<Text style={styles.optionText}>{"Include number"}</Text>
							<View style={styles.checkBox}></View>
						</View>
						<View style={styles.optionContainer}>
							<Text style={styles.optionText}>{"Include special symbol"}</Text>
							<View style={styles.checkBox}></View>
						</View>
						<TouchableOpacity style={styles.generateButton} onPress={handleGeneratePassword}>
							<Text style={styles.generateButtonText}>{"GENERATE PASSWORD"}</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	safeArea: {
		flex: 1,
		backgroundColor: "#FFFFFF",
	},
	scrollView: {
		flex: 1,
		backgroundColor: "#FFFFFF",
	},
	contentContainer: {
		paddingHorizontal: 19,
	},
	card: {
		backgroundColor: "#23235B",
		borderRadius: 15,
		paddingTop: 45,
		paddingBottom: 25,
		marginTop: 19,
		shadowColor: "#00000040",
		shadowOpacity: 0.3,
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowRadius: 4,
		elevation: 4,
	},
	titleText: {
		color: "#FFFFFF",
		fontSize: 25,
		fontWeight: "bold",
		textAlign: "center",
		marginBottom: 42,
		marginHorizontal: 82,
		width: 158,
	},
	generatedPasswordContainer: {
		height: 55,
		backgroundColor: "#151537",
		marginBottom: 47,
		marginHorizontal: 12,
		justifyContent: "center",
		alignItems: "center",
	},
	generatedPasswordText: {
		color: "#FFFFFF",
		fontSize: 20,
	},
	optionContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 27,
		marginHorizontal: 12,
	},
	optionText: {
		color: "#FFFFFF",
		fontSize: 20,
		fontWeight: "bold",
	},
	inputBox: {
		width: 118,
		height: 33,
		backgroundColor: "#FFFFFF",
	},
	checkBox: {
		width: 25,
		height: 24,
		flexDirection: "row",
		justifyContent: "space-between",
		backgroundColor: "#FFFFFF",
		padding: 2,
	},
	generateButton: {
		backgroundColor: "#3B3B98",
		paddingVertical: 22,
		paddingLeft: 46,
		paddingRight: 36,
		marginHorizontal: 26,
		alignItems: "center",
	},
	generateButtonText: {
		color: "#FFFFFF",
		fontSize: 18,
		fontWeight: "bold",
	},
});
