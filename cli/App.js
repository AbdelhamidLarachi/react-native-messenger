//
//  App.js
//  Messenger-library
//
//  Created by Abdelhamid Larachi.
//  Copyright © 2020 NitroCoding. All rights reserved.
//

import Conversation from "./App/Conversation/Conversation"
import React from "react"
import { createStackNavigator } from "react-navigation-stack"
import { createAppContainer } from "react-navigation"
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
	}

	componentDidMount() {
		if (Platform.OS === 'android') {
			if (UIManager.setLayoutAnimationEnabledExperimental) {
			  UIManager.setLayoutAnimationEnabledExperimental(true);
			}
		  }
	}

	render() {
			return <AppContainer/>
	}
}
