import { Image, View, StyleSheet,Text } from 'react-native';


export default function StudentCard() {
    return (
        <View style={styles.container}>
            <Image 
                style={styles.img}
                source={require("../assets/images/exampleID.png") } />
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
});