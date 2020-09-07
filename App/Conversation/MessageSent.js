//
//  MessageSent
//
//  Created by Abdelhamid Larachi.
//  Copyright © 2020 clean-ui. All rights reserved.
//

import React from "react"
import { StyleSheet, Text, TouchableWithoutFeedback, View, LayoutAnimation} from "react-native"
import {h, w} from "./Dimensions"




export default class MessageSent extends React.Component {

	constructor(props) {
		super(props)
		this.state = {  
			istimestampVisible: false  
        };  
	}

	onMessageBubblePress = () => {
		LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
		this.setState({istimestampVisible: !this.state.istimestampVisible});
	}

	render() {
	
		return <TouchableWithoutFeedback
		onPress={() => this.onMessageBubblePress()}>
				<View>
				{this.state.istimestampVisible ?
				<Text style={styles.timestampText}>FRI 11:01</Text> : null}
				<View 
				navigation={this.props.navigation}
				style={{backgroundColor: '#0084FF', alignSelf: 'flex-end', padding: 10, borderRadius: 20, marginRight: 62.8*w, marginBottom: 2.2*h, maxWidth: 94.2*w }}>
		        <Text style={{color: 'white'}}>Sample text here</Text>
	            </View>
				</View>
			</TouchableWithoutFeedback>
	}
}

const styles = StyleSheet.create({

	backgroundImage: {
		backgroundColor: "transparent",
		resizeMode: "stretch",
		position: "absolute",
		right: 65.5*w,
		width: 53.4*w,
		bottom: 2.5*h,
		height: 4.8*h,
	},
	messageText: {
		backgroundColor: "transparent",
		color: "white",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 1.6*h,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		lineHeight: 4.5*h,
		position: "absolute",
		right: 72.5*w,
	},
	timestampText: {
		color: "rgb(168, 168, 168)",
		fontFamily: ".AppleSystemUIFont",
		fontSize: 1.3*h,
		fontStyle: "normal",
		fontWeight: "normal",
		textAlign: "center",
		backgroundColor: "transparent",
		alignSelf: "center",
		marginBottom: 0.6*h
	},
})
