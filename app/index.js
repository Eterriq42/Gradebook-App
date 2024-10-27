import { StyleSheet, View, ScrollView, FlatList, Text } from "react-native";
import { Link} from "expo-router";
// import Gradebook from "../app/gradebook";
// import StudentCard from "../components/StudentCard";
// import StudentGradeInfo from "@/components/StudentGradeInfo";


export default function Index() {
  

  return (
    <ScrollView>
      <View>
        <View style={styles.titlebar}>
          <Text style={styles.title}>E206</Text>
          <Text style={styles.welcome}>Welcome to E206's Gradebook!</Text>
          <Text style={styles.navtext}>Click Below to Navigate to See the Gradebook.</Text>
          <View style={styles.button}>
            <Link href="gradebook" style={styles.link}>Go to Gradebook</Link>
          </View>
        </View>
        

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  titlebar: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#cfb353',
    padding: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  welcome: {
    fontSize: 18,
    marginBottom: 20,
  },
  navtext: {
    fontSize: 16,

  },
  button: {
    borderRadius: 8,
    borderWidth: 4,
    borderColor: 'black',
    marginTop: 10,
  },
  link: {
    fontSize: 18,
    color: "#cfb353",
    backgroundColor: '#228B22',

  },

});