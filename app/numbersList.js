import React from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';


export default function NumList() {
    const nums = [];
    for (let i =1; i<10; i++) {
        nums.push(i);
    }
    return (
        <ScrollView>
            <View style={styles.container}>
                {nums.map((num, index) => (
                    <Text key={index} style={styles.text}>{num}</Text>
                ))}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});