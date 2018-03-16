import React, { Component } from 'react';
import {

  StyleSheet,
  Text,
  View,StatusBar,TouchableOpacity,ScrollView,Navigator,Dimensions,
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import {TabNavigator} from 'react-navigation';
import Style from "./src/stylesFile";


import Login from './src/pages/Login';
import Home from './src/pages/Home';
import ExperienceView from './src/pages/ExperienceView';
import ProfileView from './src/pages/ProfileView';
import ViewDetails from './src/pages/ViewDetails';
import MoreHotels from './src/pages/MoreHotels';
import CameraView from './src/pages/CameraView';
import Viewer from './src/pages/Viewer'
import Choice from './src/Choice'


import Tab1 from './src/Tabs/Tab1';
import Tab2 from './src/Tabs/Tab2';
import Tab3 from './src/Tabs/Tab3';
import Tab4 from './src/Tabs/Tab4';


const Tabs = TabNavigator({
 Tab1: { screen: Tab1 },
 Tab2: { screen: Tab2 },
 Tab3: { screen: Tab3 },




},
{tabBarPosition : 'top',
swipeEnabled : true,
animationEnabled:true,
tabBarOptions:{
  activeTintColor:'#a8003f',
  activeBackgroundColor:'green',
  inactiveTintColor:'#ff5c97',
  inactiveBackgroundColor:'#ff5c97',
  upperCaseLabel:false,
  style: {
  backgroundColor: '#ffffff',
},
labelStyle:{
  fontSize: Style.FONT_SIZE,
  fontFamily:'MontSerrat Light'
},

indicatorStyle:{
  backgroundColor: '#a8003f',
  height:3,
}

}})

const Navigation = StackNavigator({
  Zero : {screen: Choice},
  First : {screen :Login},
  Tabs: { screen: Tabs },
  Second : {screen :Home},
  Third : {screen : ViewDetails},

  Fifth : {screen: ExperienceView},
  Sixth : {screen: ProfileView},
  Seventh:{screen:MoreHotels},
  Camera:{screen:CameraView},
  gallery : {screen:Viewer},


 });

export default Navigation;
