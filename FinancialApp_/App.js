import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TransactionsList from './screens/TransactionsList';
import TransactionDetail from './screens/TransactionDetail';
import Summary from './screens/Summary';
import Icon from 'react-native-vector-icons/Ionicons';
import { TransactionsProvider } from './context/TransactionsContext';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TransactionsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TransactionsList"
        component={TransactionsList}
        options={{ headerShown: true, title: 'Transactions' }}
      />
      <Stack.Screen
        name="TransactionDetail"
        component={TransactionDetail}
        options={{ headerShown: true, title: 'Transaction Detail' }}
      />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <TransactionsProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: '#4CAF50', 
            tabBarInactiveTintColor: '#888', 
          }}
        >
          <Tab.Screen
            name="Transactions"
            component={TransactionsStack}
            options={{
              headerShown:false,
              tabBarIcon: ({ color, size }) => (
                <Icon name="list" color={color} size={size} />
              ),
            }}
          />
          <Tab.Screen
            name="Summary"
            component={Summary}
            options={{
              tabBarIcon: ({ color, size }) => (
                <Icon name="analytics" color={color} size={size} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </TransactionsProvider>
  );
}

export default App;
