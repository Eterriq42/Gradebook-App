import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";

// const gradebook = [
//     { name: 'Erik', absences: 0 },
//     { name: 'Johnny', absences: 2 },
//     { name: 'Brady', absences: 3 },
//     { name: 'Gabriel', absences: 1 },
//     { name: 'Anthony', absences: 2 },
//     { name: 'Angel', absences: 5 }
// ];

export default function StudentGradeInfo({ grade, absences }) {


    return (
        // <ScrollView>
        <View >
            <Text style={styles.gradeText}>Grade:{grade}</Text>
            <Text style={styles.absText}>Absences:{absences}</Text>

        </View>
        // </ScrollView>

    )
}

const styles = StyleSheet.create({

    gradeText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: "#cfb53b",
    },
    absText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: "red",
    },
    studentCont: {
        padding: 15,
        marginBottom: 10,
        borderRadius: 8,
        borderWidth: 1,

    }
})