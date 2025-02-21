import { Text, View,StyleSheet, Button, TextInput } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';


export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.divstyle}></View>

      <View style={styles.box1}>

        <Text style={styles.text1}>Enter your guess between 0 and 99:</Text>
        <View style={styles.inbutbox}>
          <TextInput style={styles.input}
            placeholder="Enter your guess"
            placeholderTextColor="gray"
            keyboardType="numeric"
            >
          </TextInput>
          <View style={styles.bottom1}>      
          <Button title="CHECK" />
          </View>        
        </View>
      </View>

      <View style={styles.divstyle}></View>

      <View style={styles.box2}>
      <Text style={styles.text2}>Your guesses: ?</Text>
      </View>

      <View style={styles.divstyle}></View>

      <View style={styles.box3}>
      <Text style={styles.text3}>Lower or higher?</Text>
      </View>

      <View style={styles.divstyle}></View>

      <View style={styles.box4}>
        <View style={styles.bottom2}>      
          <Button title="RESET" />
        </View>
      </View>

      <View style={styles.divstyle}></View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  box1: {
    width: "96%",
    height: "42%",
    backgroundColor: "#FF00FE",
  },
  box2: {
    width: "90%",
    height: "3%",
    backgroundColor: "#2CFEFD",
  },
  box3: {
    width: "96%",
    height: "43%",
    backgroundColor: "#FCFF12",
  },
  box4: {
    width: "90%",
    height: "4.5%",
    backgroundColor: "#2CFEFD",
  },
  divstyle: {
    width: "100%",
    height: "1%",
    backgroundColor: "#FFFFFF",
  },
  text1: {
    fontSize: 18,
    marginTop: 100,
    marginBottom: 10,
    textAlign: "center",
    textAlignVertical: "bottom",
    alignContent: "center",
    
  },
  text2: {
    fontSize: 17,
    width: "100%",
    height: "100%",
    textAlign: "center",
    textAlignVertical: "center",
    alignContent: "center",
  },
  text3:{
    fontSize: 40,
    width: "100%",
    height: "100%",
    textAlign: "center",
    textAlignVertical: "center",
    alignContent: "center",
  },
  text4:{
    fontSize: 20,
    width: "100%",
    height: "100%",
    textAlign: "center",
    textAlignVertical: "center",
    alignContent: "center",
  },
  bottom2:{
    height: "100%",
    width: "17%",
    alignSelf: "center",
  },
  bottom1:{
    height: "100%",
    width: "17%",
    alignSelf: "center",
  },
  input:{
    backgroundColor:"#2CFEFD",
    width: 150,
    height: 35,
    alignSelf: "center",
    textAlign: "left",
  },
  inbutbox:{
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  }
});
