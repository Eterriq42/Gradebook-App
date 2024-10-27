import React, { useState } from "react";
import { View, Text, ScrollView, StyleSheet, FlatList } from 'react-native';
import GradebookEntry from "../components/GradebookEntry";
import { useRouter } from "expo-router";

// function Student({ name, grade}) {
//     return (
//         <View style={styles.studentCont}>
//             <Text style={styles.nameText}>{name}</Text>
//             <Text style={styles.gradeText}>Grade: {grade}</Text>

//         </View>
//     );


export default function Gradebook() {

    const router = useRouter();

    const [totalBonusPoints, setTotalBonusPoints] = useState(0);
    

    const bonusAward = () => {
        setTotalBonusPoints(totalBonusPoints + 1);
    };

    const rewardMessage = () => {
        if (totalBonusPoints >= 10) {
            return "Lambos for everyone";
        } else if (totalBonusPoints >= 5) {
            return "Trucks for everyone";
        }
        return "";
    }

    const gradebook = [
        { name: 'Erik', grade: 100, absences: 0 },
        { name: 'Johnny', grade: 95, absences: 2 },
        { name: 'Brady', grade: 92, absences: 3 },
        { name: 'Gabriel', grade: 89, absences: 1 },
        { name: 'Anthony', grade: 83, absences: 2 },
        { name: 'Angel', grade: 76, absences: 5 }
    ];

    return (
        // <ScrollView>
        <View style={styles.container}>

            <FlatList
                data={gradebook}
                renderItem={({ item }) => (

                    <GradebookEntry name={item.name} grade={item.grade} absences={item.absences} bonusAward={bonusAward} />

                )}
                keyExtractor={(item) => item.name}
            />
            <Text>Total Bonus Points: {totalBonusPoints}</Text>
            {totalBonusPoints >= 5 && (
                <Text style={styles.rewardMess}>{rewardMessage()}</Text>
            )}

            <Text style={styles.goBack}
                onPress={() => {
                    router.push("/");
                }}>Go Back to title screen</Text>


        </View>
        // </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // flexDirection: 'row',
    },
    rewardMess: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'green',
        marginTop: 20,
    },
    goBack: {
        fontSize:24,
        marginTop: 10,
        borderRadius: 8,
        borderWidth: 4,
        backgroundColor:'#cfb353',
    }


});