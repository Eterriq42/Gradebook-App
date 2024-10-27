import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase.config';
import { collection, addDoc } from 'firebase/firestore';

export default function FirebaseFetcher() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'students'));
                const studentData = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setStudents(studentData);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };

        fetchData();
    }, []);

    const addStudent = async (studentData) => {
        try {
            const docRef = await addDoc(collection(db, 'students'), studentData);
            console.log('Document written with ID: ', docRef.id);
        } catch (e) {
            console.error('Error adding document: ', e);
        }
    };

    return (
        <View>
            {students.map((student) => (
                <Text key={student.id}>{student.name}</Text>
            ))}
        </View>
    );
}

