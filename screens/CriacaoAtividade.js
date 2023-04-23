import * as React from "react";
import{View, Text, StyleSheet} from "react-native"

export default class CriaAtividade extends React.Component{
    render(){
        return(
            <View style = {styles.container}>
                <Text>
                    Criação de atividade
                </Text>
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