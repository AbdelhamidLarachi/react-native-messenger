//
//  App.js
//  Messenger-library
//
//  Created by Abdelhamid Larachi.
//  Copyright © 2020 clean-ui. All rights reserved.
//

import * as Font from "expo-font"
import Conversation from "./App/Conversation/Conversation"
import React from "react"
import { AppLoading, DangerZone } from "expo"
import { createAppContainer, createStackNavigator } from "react-navigation"
import { Platform, UIManager} from "react-native"



const PushRouteOne = createStackNavigator({
	Conversation: {
		screen: Conversation,
	},
}, {
	initialRouteName: "Conversation",
})

const RootNavigator = createStackNavigator({
	PushRouteOne: {
		screen: PushRouteOne,
	},
}, {
	mode: "modal",
	headerMode: "none",
	initialRouteName: "PushRouteOne",
})

const AppContainer = createAppContainer(RootNavigator)



export default class App extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			fontsReady: false,
		}
	}

	componentDidMount() {
	
		this.initProjectFonts();

		if (Platform.OS === 'android') {
			if (UIManager.setLayoutAnimationEnabledExperimental) {
			  UIManager.setLayoutAnimationEnabledExperimental(true);
			}
		  }
	}

	async initProjectFonts() {
	
		await Font.loadAsync({
			".AppleSystemUIFont": require("./assets/fonts/SFNS.ttf"),
			"ArialMT": require("./assets/fonts/Arial.ttf"),
		})
		this.setState({
			fontsReady: true,
		})
	}

	render() {
	
		if (!this.state.fontsReady) { return (<AppLoading />); }
		return <AppContainer/>
	}
}
