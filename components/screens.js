import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Alert, Picker, Slider } from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements'
import DatePicker from 'react-native-datepicker'

export class HomeScreen extends React.Component {

	static navigationOptions = {
		title: 'Poubelle la vie !',
	};

	render() {
		const { navigate } = this.props.navigation;
		return (
			<View style={styles.AppContainer}>
				<Text style={styles.Title}>Je veux...</Text>
				<View style={styles.HomeButtonsContainer}>
					<TouchableOpacity
						onPress={() => 
							navigate('BagOut', {})
						}
						style={styles.SquareButtonXL}>
						<Text style={[styles.TextXL, styles.Light]}>SORTIR UN SAC</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={() => 
							navigate('BinOut', {})
						}
						style={styles.SquareButtonXL}>
						<Text style={[styles.TextXL, styles.Light]}>RAMASSAGE</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.journalContainer}>
					<FlatList
						data={[
							{key: "3", when: 'Hier', what: "Poubelle la vie !"},
							{key: "2", when: '7j', what: "Sortez vos poubelles :)"},
							{key: "1", when: '15j', what: "Cœur avec les doigts"}
						]}
						renderItem={({item}) => <Text style={styles.journalEntry}>{item.when} – {item.what}</Text>}
					/>
				</View>
			</View>
		);
	}
}

export class BagOutScreen extends React.Component {
	static navigationOptions = {
		title: 'Sortir un sac',
	};
	
	render() {
		const { navigate } = this.props.navigation;
		return (
			<View style={styles.AppContainer}>
				<View style={styles.BagOutOptFields}>
					<View>
						<FormLabel>Date</FormLabel>
						<DatePicker
							mode="date"
							showIcon={false}
							onDateChange={(date) => Alert.alert("Understood: " + {date})}
						/>
					</View>
					<View>
						<FormLabel>Volume du sac (optionnel)</FormLabel>
						<Picker
							selectedValue="30"
							style={{ height: 50, width: 100 }}
							onValueChange={(itemValue, itemIndex) => Alert.alert("Understood: " + {itemValue})}>
							<Picker.Item label="5L" value="5" />
							<Picker.Item label="10L" value="10" />
							<Picker.Item label="20L" value="20" />
							<Picker.Item label="30L" value="30" />
							<Picker.Item label="50L" value="50" />
							<Picker.Item label="100L" value="100" />
							<Picker.Item label="130L" value="130" />
							<Picker.Item label="240L" value="240" />
						</Picker>
					</View>
					<View>
						<FormLabel>Poids du sac (optionnel)</FormLabel>
						<FormInput
							onChangeText={(text) => Alert.alert("Understood: " + {text})}
							placeholder="Poids du sac en kg"
							clearTextOnFocus={true}
							keyboardType="decimal-pad"
						/>
					</View>
				</View>
				<View style={styles.BagOutAllButtonsContainer}>
					<View style={styles.BagOutMainButtonsContainer}>
						<TouchableOpacity
							onPress={() => 
								Alert.alert("Sac recyclable sorti")
							}
							style={styles.SquareButtonL}>
							<Text style={[styles.TextM, styles.Light]}>DÉCHETS RECYCLABLES</Text>
						</TouchableOpacity>
						<TouchableOpacity
							onPress={() => 
								Alert.alert("Sac non recyclable sorti")
							}
							style={styles.SquareButtonL}>
							<Text style={[styles.TextM, styles.Light]}>DÉCHETS NON RECYCLABLES</Text>
						</TouchableOpacity>
					</View>
					<TouchableOpacity
						onPress={() => 
							navigate('BinOut', {})
						}
						style={styles.RectButtonS}>
						<Text style={[styles.TextM, styles.Light]}>RAMASSAGE</Text>
					</TouchableOpacity>
				</View>
			</View>
		)
	}

}

export class BinOutScreen extends React.Component {
	static navigationOptions = {
		title: 'Ramassage',
	};
	
	render() {
		const { navigate } = this.props.navigation;
		return (
			<View style={styles.AppContainer}>
				<View style={styles.BinOutTopButtonsContainer}>
					<View>
						<TouchableOpacity
							onPress={() => 
								Alert.alert("Ramassage recyclables seulement")
							}
							style={styles.SquareButtonM}>
							<Text style={[styles.TextM, styles.Light]}>BAC DE RECYCLABLES</Text>
						</TouchableOpacity>
						<Text style={[styles.TextM, styles.Dark]}>X sacs</Text>
					</View>
					<View>
						<TouchableOpacity
							onPress={() => 
								Alert.alert("Ramassage mixte")
							}
							style={styles.SquareButtonM}>
							<Text style={[styles.TextM, styles.Light]}>BAC MIXTE (RECYCLABLES et NON RECYCLABLES)</Text>
						</TouchableOpacity>
						<Text style={[styles.TextM, styles.Dark]}>X+Y sacs</Text>
					</View>
					<View>
						<TouchableOpacity
							onPress={() => 
								Alert.alert("Ramassage non recyclables seulement")
							}
							style={styles.SquareButtonM}>
							<Text style={[styles.TextM, styles.Light]}>BAC DE NON RECYCLABLES</Text>
						</TouchableOpacity>
						<Text style={[styles.TextM, styles.Dark]}>Y sacs</Text>
					</View>
				</View>
				<View style={styles.BinOutOptFields}>
					<View>
						<FormLabel>Date</FormLabel>
						<DatePicker
							mode="date"
							showIcon={false}
							onDateChange={(date) => Alert.alert("Understood: " + {date})}
						/>
					</View>
					<View>
						<FormLabel>Niveau de remplissage du bac</FormLabel>
						<Slider
							minimumValue={0}
							maximumValue={100}
							step={25}
							value={75}
							onSlideComplete={(value) => Alert.alert("Understood: " + {value})}
						/>
					</View>
					<View>
						<FormLabel>Poids</FormLabel>
						<FormInput
							onChangeText={(text) => Alert.alert("Understood: " + {text})}
							placeholder="Poids du sac (optionnel)"
							clearTextOnFocus={true}
							keyboardType="decimal-pad"
						/>
					</View>
				</View>
				<View style={styles.BinOutSaveButtonContainer}>
					<TouchableOpacity
						onPress={() => 
							navigate('Home', {})
						}
						style={styles.RectButtonS}>
						<Text style={[styles.TextM, styles.Light]}>VALIDER</Text>
					</TouchableOpacity>
				</View>
			</View>
		)
	}

}

const styles = StyleSheet.create({
	// Commons
	AppContainer: {
		flex: 1,
		//justifyContent: 'center',
		justifyContent: 'flex-end',
	},
	Title: {
		padding: 20,
		color: 'black',
		textAlign: "center",
		fontSize: 18,
		fontWeight: "500", // normal, bold, 100..900
	},
	Light: {
		color: 'white',
	},
	Dark: {
		color: 'black',
	},
	TextM: {
		textAlign: "center",
		//fontFamily: "Geomanist",
		fontSize: 12,
		fontWeight: "300", // normal, bold, 100..900
	},
	TextXL: {
		textAlign: "center",
		//fontFamily: "Geomanist",
		fontSize: 16,
		fontWeight: "500", // normal, bold, 100..900
	},
	SquareButtonM: {
		height: 100,
		width: 100,
		padding: 20,
		margin: 10,
		justifyContent: 'space-around',
		backgroundColor: "powderblue",
	},
	SquareButtonL: {
		height: 130,
		width: 130,
		padding: 20,
		margin: 20,
		justifyContent: 'space-around',
		backgroundColor: "powderblue",
	},
	SquareButtonXL: {
		height: 160,
		width: 160,
		padding: 20,
		margin: 20,
		justifyContent: 'space-around',
		backgroundColor: "powderblue",
	},
	RectButtonS: {
		height: 50,
		padding: 5,
		marginTop: 5,
		marginBottom: 5,
		marginLeft: 20,
		marginRight: 20,
		justifyContent: 'space-around',
		backgroundColor: "powderblue",
	},
	RectButtonXL: {
		height: 200,
		padding: 20,
		margin: 20,
		justifyContent: 'space-around',
		backgroundColor: "powderblue",
	},
	// HOME SCREEN
	HomeButtonsContainer: {
		flex: 2,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: 'space-around',
		backgroundColor: "yellow",
	},
	journalContainer: {
		flex: 1,
		//flexDirection: 'column-reverse',
		justifyContent: 'flex-end',
		backgroundColor: "green"
	},
	journalEntry: {
		paddingLeft: 20,
		paddingRight: 20,
		marginTop: 2,
		marginBottom: 2,
	},
	// BAGOUT SCREEN
	BagOutOptFields: {
		flex: 3,
		justifyContent: "space-around",
		backgroundColor: "yellow"
	},
	BagOutAllButtonsContainer: {
		flex: 2,
		flexDirection: "column",
		justifyContent: 'flex-end',
		backgroundColor: "yellow",
	},
	BagOutMainButtonsContainer: {
		flexDirection: "row",
		justifyContent: "center",
		backgroundColor: "blue",
	},
	// BINOUT SCREEN
	BinOutTopButtonsContainer: {
		flex: 2,
		flexDirection: "row",
		justifyContent: 'center',
		alignItems: "flex-start",
		backgroundColor: "yellow",
	},
	BinOutOptFields: {
		flex: 4,
		justifyContent: "space-around",
		backgroundColor: "green"
	},
	BinOutSaveButtonContainer: {
		flex: 1,
		justifyContent: "center",
		backgroundColor: "blue",
	},
});