import { View, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import styles from './styles';
export default function Header() {
    return (
        <View style={styles.container}>
            <Entypo name="list" size={30} color="blue" />
            <Text style= {styles.headTitle}>Todo App</Text>
            <Text style= {styles.headTitle}> by snehal</Text>
        </View>
    );
}