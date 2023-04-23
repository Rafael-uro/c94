import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  
} from "react-native";

import { RFValue } from "react-native-responsive-fontsize";
import * as Font from "expo-font";


import * as SplashScreen from "expo-splash-screen";
SplashScreen.preventAutoHideAsync();

export default class CardAtividade extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false,

      
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
    this.fetchUser();
  }


  render() {
    return (
      <View style={styles.cardContainer}>
        <SafeAreaView style={styles.droidSafeArea} />

        
        <View style={styles.titleContainer}>
        
            <Text style={styles.TaskText}>Estudar</Text>
            <Text style={styles.descriptionText}>as 20 horas Estudar para a prova</Text>
          
        </View>

        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  cardContainer: {
    margin: RFValue(13),
    backgroundColor: "#1C1C1C",
    borderRadius: RFValue(20),
  },

  titleContainer: {
    paddingLeft: RFValue(20),
    justifyContent: "center",
  },
 
  TaskText: {
  
    fontSize: RFValue(18),
    color: "white"
  },

  
  descriptionText: {
    fontSize: RFValue(13),
    color: "white",
  },

});
