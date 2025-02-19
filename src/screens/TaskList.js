import { View,Text, ImageBackground, StyleSheet } from "react-native";

export default function TaskList() {
  return(
    <View style={styles.container}>
      <ImageBackground source={{}} style={styles.background}></ImageBackground>
      <View style={styles.taskList}></View>
      <Text>Task #01</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'crimson'
  },
  background: {
    flex: 3,
    backgroundColor: 'pink'
  },
  taskList: {
    flex: 7,
    backgroundColor: '#e7c6ff'
  }
})