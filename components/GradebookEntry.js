import React from "react";
import { ScrollView, View, Text, StyleSheet, Button } from "react-native";
import StudentCard from '../components/StudentCard';
import StudentGradeInfo from '../components/StudentGradeInfo';
import { useState } from "react";


export default function GradebookEntry({ name, grade, absences, bonusAward }) {
    const [bonusPoints, setBonusPoints] = useState(0);

    return (
        // <ScrollView>
        <View style={styles.entry}>
            <View style={styles.imgContainer}>
                <StudentCard />
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.nameText}>{name}</Text>
                <Text style={styles.gradeText}>Grade:{grade + bonusPoints}</Text>
                <View style={styles.belowRow}>
                    <View style={styles.box}>
                        <Text>Absences: {absences}</Text>
                    </View>
                    <View style={styles.box}>
                        <Text>Bonus Points: {bonusPoints}</Text>
                    </View>
                </View>
                <Button title="Award Bonus Point" onPress={() => {
                    setBonusPoints(bonusPoints + 1);
                    bonusAward();
                }} />

            </View>


        </View>
        // </ScrollView>
    )
}
const styles = StyleSheet.create({
    entry: {
        flexDirection: 'row',
        padding: 15,
        marginBottom: 10,
        borderRadius: 8,
        borderWidth: 4,
        borderColor: '#cfb353',
        alignItems: "center",
        backgroundColor: '#228B22',
    },
    imgContainer: {
        width: '30%',
        alignItems: 'center',
    },
    infoContainer: {
        width: '70%',
        paddingLeft: 10,
        alignItems: 'center',
    },
    nameText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: "#cfb53b",
    },
    gradeText: {
        fontSize: 18,
        fontWeight: 'normal',
    },
    belowRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    box: {
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        flex: 1,
        marginHorizontal: 5,
        alignItems: 'center',
        marginBottom: 4,
    },
})