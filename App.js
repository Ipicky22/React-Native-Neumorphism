import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import Slider from "@react-native-community/slider";

const gray = "#91A1BD";

export default function App() {
	const NeuMorph = ({ children, size, style }) => {
		return (
			<View style={styles.topShadow}>
				<View style={styles.bottomShadow}>
					<View
						style={[
							styles.inner,
							{ width: size || 40, height: size || 40, borderRadius: size / 2 || 20 },
							style,
						]}>
						{children}
					</View>
				</View>
			</View>
		);
	};

	return (
		<View style={styles.container}>
			<SafeAreaView style={{ alignSelf: "stretch" }}>
				<View style={{ marginHorizontal: 32, marginTop: 32 }}>
					<View style={styles.topContainer}>
						<NeuMorph size={48}>
							<AntDesign name='arrowleft' size={20} color={gray} />
						</NeuMorph>

						<View>
							<Text style={styles.playing}>PLAYING NOW</Text>
						</View>

						<NeuMorph size={48}>
							<Entypo name='menu' size={24} color={gray} />
						</NeuMorph>
					</View>

					<View style={styles.songArtContainer}>
						<NeuMorph size={300}>
							<Image source={require("./assets/image.jpg")} style={styles.songArt} />
						</NeuMorph>
					</View>

					<View style={styles.songContainter}>
						<Text style={styles.title}>Lost it</Text>
						<Text style={styles.artist}>Flume ft. Vic Mensa</Text>
					</View>

					<View style={styles.trackContainer}>
						<View style={{ flexDirection: "row", justifyContent: "space-between" }}>
							<Text style={styles.time}>1:21</Text>
							<Text style={styles.time}>3:46</Text>
						</View>

						<Slider
							minimumValue={0}
							maximumValue={1}
							minimumTrackTintColor='#8AAAFF'
							maximumTrackTintColor='#DAE6F4'
							thumbTintColor='#7B9BFF'
						/>
					</View>

					<View style={styles.controlsContainer}>
						<NeuMorph size={80}>
							<Ionicons name='play-back-sharp' size={24} color={gray} />
						</NeuMorph>

						<NeuMorph size={80} style={{ backgroundColor: "#8AAAFF", borderColor: "#8AAAFF" }}>
							<Ionicons name='ios-pause' size={24} color='#FFFFFF' />
						</NeuMorph>

						<NeuMorph size={80}>
							<Ionicons name='play-forward-sharp' size={24} color={gray} />
						</NeuMorph>
					</View>
				</View>
			</SafeAreaView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#DEE9FD",
		alignItems: "center",
	},
	topContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
	inner: {
		backgroundColor: "#DEE9FD",
		alignItems: "center",
		justifyContent: "center",
		borderColor: "#E2ECFD",
		borderWidth: 1,
	},
	topShadow: {
		shadowOffset: {
			width: -6,
			height: -6,
		},
		shadowOpacity: 1,
		shadowRadius: 6,
		shadowColor: "#FBFFFF",
	},
	bottomShadow: {
		shadowOffset: {
			width: 6,
			height: 6,
		},
		shadowOpacity: 1,
		shadowRadius: 6,
		shadowColor: "#B7C4DD",
	},
	playing: {
		color: gray,
		fontWeight: "800",
	},
	songArtContainer: {
		marginVertical: 32,
		alignItems: "center",
	},
	songArt: {
		width: 300,
		height: 300,
		borderRadius: 150,
		borderColor: "#D7E1F3",
		borderWidth: 10,
	},
	songContainter: {
		alignItems: "center",
	},
	title: {
		fontSize: 30,
		color: "#6C7A93",
		fontWeight: "600",
	},
	artist: {
		fontSize: 14,
		marginTop: 6,
		color: gray,
		fontWeight: "500",
	},
	trackContainer: {
		marginTop: 32,
		marginBottom: 64,
	},
	time: {
		fontSize: 10,
		color: gray,
		fontWeight: "700",
	},
	controlsContainer: {
		flexDirection: "row",
		justifyContent: "space-around",
	},
});
