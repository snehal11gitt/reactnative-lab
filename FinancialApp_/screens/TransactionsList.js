import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { TransactionsContext } from '../context/TransactionsContext';

const TransactionsList = ({ navigation }) => {
  const { transactions } = useContext(TransactionsContext);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Transactions List</Text>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('TransactionDetail', { transaction: item })}
            style={styles.itemContainer}
          >
            <View style={styles.item}>
              <View style={styles.row}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.date}>{item.date}</Text>
              </View>
              <Text style={styles.amount}>${item.amount.toFixed(2)}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5', 
    padding: 16,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4CAF50', 
    marginBottom: 16,
  },
  itemContainer: {
    marginBottom: 12, 
  },
  item: {
    backgroundColor: '#fff', 
    padding: 16,
    borderRadius: 10,
    borderWidth: 1, 
    borderColor: '#ddd', 
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  date: {
    fontSize: 14,
    color: '#555',
  },
  amount: {
    fontSize: 16,
    fontWeight: '600',
    color: '#4CAF50', 
    marginTop: 8, 
  },
});

export default TransactionsList;
