//
//  MessageRevceived
//
//  Created by Abdelhamid Larachi.
//  Copyright © 2020 NitroCoding. All rights reserved.
//

import React from "react"
import { Image, StyleSheet, Text, TouchableWithoutFeedback, View, LayoutAnimation} from "react-native"
import {h, w} from "./Dimensions"
import { TouchableOpacity } from "react-native-gesture-handler"
import reactions from './reactions';


export default class MessageReceived extends React.Component {

	constructor(props) {
		super(props)
		this.state = {  
			isReactionVisible: false,  
			reaction: null,
			istimestampVisible: false
        };  
	}

setReaction = (action) => {
	LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
	this.setState({ reaction: action, isReactionVisible: false})
}

onBubbleLongPress = () => {
	LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
	this.setState({ isReactionVisible: true})
}
onBubblePress = () => {
	LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
	if(this.state.isReactionVisible == true)
	this.setState({ isReactionVisible: false})
	else
	this.setState({istimestampVisible: !this.state.istimestampVisible});
}

	render() {
	
		return <TouchableWithoutFeedback>
			<View>
			{this.state.istimestampVisible ?
				<Text style={styles.timestampText}>SUN 13:15</Text> : null}
				<View
					navigation={this.props.navigation}
					style={styles.MessageReceived}>
					<View
						style={styles.avatarView}>
						<View pointerEvents="box-none">
							<Image
								source={require("./../../assets/images/-avatar.png")}
								style={styles.avatarImage}/>
						</View>
						<Image
							source={require("./../../assets/images/-available.png")}
							style={styles.availableImage}/>
				</View>
					{this.state.isReactionVisible ?
					<View style={styles.reactionView}>
	                <TouchableOpacity onPress={() => this.setReaction(reactions.icons.like)}>
					<Image
					source={reactions.icons.like}
					style={styles.reactionIcon}/>
					</TouchableOpacity>
	                <TouchableOpacity onPress={() => this.setReaction(reactions.icons.love)}>
					<Image
					source={reactions.icons.love}
					style={styles.reactionIcon}/>
					</TouchableOpacity>
	                <TouchableOpacity onPress={() => this.setReaction(reactions.icons.haha)}>
					<Image
					source={reactions.icons.haha}
					style={styles.reactionIcon}/>
					</TouchableOpacity>
	                <TouchableOpacity onPress={() => this.setReaction(reactions.icons.angry)}>
					<Image
					source={reactions.icons.angry}
					style={styles.reactionIcon}/>
					</TouchableOpacity>
	                <TouchableOpacity onPress={() => this.setReaction(reactions.icons.sad)}>
					<Image
					source={reactions.icons.sad}
					style={styles.reactionIcon}/>
					</TouchableOpacity>
	                <TouchableOpacity onPress={() => this.setReaction(reactions.icons.wow)}>
					<Image
					source={reactions.icons.wow}
					style={styles.reactionIcon}/>
					</TouchableOpacity>

               </View> : null }
			   
			   {this.state.reaction != null ?
					<View style={styles.bubbleReaction}>
	                <TouchableOpacity>
					<Image
					source={this.state.reaction}
					style={styles.reactionIcon}/>
					</TouchableOpacity>
					</View>
					: null}
			<TouchableWithoutFeedback 		
			onPress={() => this.onBubblePress()}
			// onBlur={() => this.setState({ isReactionVisible: false })}
			onLongPress={() => this.onBubbleLongPress()}>
		    <View 
				navigation={this.props.navigation}
				style={styles.bubbleText}>
		      <Text style={{color: 'black'}}>I just realized it's Elizabeth's birthday next week. I want to plan a surprise 🎂 for her</Text>
	          </View>
			  </TouchableWithoutFeedback>
		    </View>
			</View>
			</TouchableWithoutFeedback>
	}
}

const styles = StyleSheet.create({
	MessageReceived: {
		backgroundColor: "transparent",
		width: "100%",
		flexDirection: "row",
		alignItems: "flex-end",
	},
	avatarView: {
		backgroundColor: "transparent",
		width: 11.4*w,
		height: 4.5*h,
		marginLeft: 60.1*w,
		marginBottom: 1.8*h,
	},
	avatarImage: {
		backgroundColor: "transparent",
		resizeMode: "stretch",
		width: 7.2*w,
		height: 3.3*h,
		marginLeft: 1.7*w,
	},
	availableImage: {
		backgroundColor: "transparent",
		resizeMode: "stretch",
		position: "absolute",
		right: 1.4*w,
		width: 2.9*w,
		bottom: 0.4*h,
		height: 1.3*h,
	},

reactionView: {
	backgroundColor: 'white', 
	flex: 1, 
	flexDirection: "row", 
	alignItems: 'center', 
	position: 'absolute', 
	right: 72.5*w, 
	bottom: 8.9*h,
	zIndex: 1, 
	borderRadius: 20, 
	padding: 5, 
	shadowColor: "#000",
	shadowOffset: {
	width: 0,
	height: 0.2*h},
	shadowOpacity: 0.25,
	shadowRadius: 3.84,
	elevation: 5
},
reactionIcon: {
	width: 6*w, 
	height: 2.8*h, 
	marginRight: 1.2*w,
	resizeMode: "stretch",

},
bubbleText: {
	backgroundColor: '#f1f0f0', 
	alignSelf: 'flex-start', 
	padding: 10, 
	borderRadius: 20, 
	maxWidth: 87*w,
	marginBottom: 2.2*h
},
bubbleReaction: {
	backgroundColor: 'transparent', 
	flex: 1, 
	flexDirection: "row", 
	alignItems: 'center', 
	position: 'absolute', 
	right: 65.2*w, 
	bottom: 0.6*h,
	zIndex: 1, 
	borderRadius: 20, 
	shadowColor: "#000",
	shadowOffset: {
	width: 0,
	height: 0.2*h},
	shadowOpacity: 0.25,
	shadowRadius: 3.84,
	elevation: 5
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
