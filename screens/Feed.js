import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";


import * as Font from "expo-font";
import { FlatList } from "react-native-gesture-handler";
import firebase from "firebase";
import CardAtividade from "./CartaoAtividade";

export default class Feed extends React.Component{
    renderItem = ({ item: story }) => {
        return <CardAtividade/>;
      };
    render(){
        return(
            //esse projeto tem o foco em criar a estrutura do app, as funcionalidades só vão começar a funcionar no proximo projeto
            <View style = {styles.container}>
                <FlatList
                renderItem={this.renderItem}/>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#1C1C1C",
      alignItems: "center",
      justifyContent: "center",
    },
})