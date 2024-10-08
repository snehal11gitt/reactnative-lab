import { StatusBar } from 'expo-status-bar';
import { View, SafeAreaView } from 'react-native';
import Header from './src/components/Header/Header';
import Tasks from './src/components/Tasks/Tasks';
import Form from './src/components/Form/Form';
import styles from './src/styles/main';
import { FontAwesome } from '@expo/vector-icons';
import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import 'firebase/firestore';

const Tab = createBottomTabNavigator();

export default function App() {
    
    const [tasks, setTasks] = useState([
        { id: 1, description: 'Complete the assignment', done: true },
        { id: 2, description: 'Read the book', done: false },
        { id: 3, description: 'Go to the gym', done: true },
        { id: 4, description: 'Buy groceries', done: false },
    ]);
    
    let newTaskId = tasks.length + 1;

    const handleAddTask = (taskDescription, taskDone) => {
        setTasks([...tasks, {
            id: newTaskId++,
            description: taskDescription,
            done: taskDone
        }]);
    }
    const handleStatusChange = (id) => {
        setTasks(tasks.map(task => {
            if (task.id === id) {
                return { ...task, done: !task.done };
            }
            return task;
        }));
    }

    const handleTaskRemoval = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    }


    return (
    
        <SafeAreaView style={styles.container}>
            <NavigationContainer>
                {/* <View style={styles.container}> */}
                <StatusBar style="auto" />
                <Header />
                <Tab.Navigator screenOptions={{ headerShown: false }}>
                    <Tab.Screen name='List'
                        options={{ tabBarIcon: ({ color }) => (<FontAwesome name="list-ol" size={15} color={color} />) }}>
                        {(props) => (
                            <Tasks {...props} tasks={tasks} onStatusChange={handleStatusChange}
                                onTaskRemoval={handleTaskRemoval} />
                        )}
                    </Tab.Screen>
                    <Tab.Screen name='Add'
                        options={{ tabBarIcon: ({ color }) => (<FontAwesome name="plus" size={18} color={color} />) }}>
                        {(props) => (
                            <Form {...props} onAddTask={handleAddTask} />
                        )}
                    </Tab.Screen>

                </Tab.Navigator>

                {/* </View> */}
            </NavigationContainer>
        </SafeAreaView>

    );
}

