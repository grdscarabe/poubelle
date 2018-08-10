import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { HomeScreen, BagOutScreen, BinOutScreen } from './components/screens';

const RootStack = createStackNavigator(
	{
		Home: { screen: HomeScreen },
		BagOut: { screen: BagOutScreen },
		BinOut: { screen: BinOutScreen },
	},{
		initialRouteName: 'Home',
	}
);

export default class App extends React.Component {
	render() {
		return <RootStack />;
	}
}