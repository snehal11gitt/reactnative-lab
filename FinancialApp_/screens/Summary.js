import React, { useContext } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { TransactionsContext } from '../context/TransactionsContext';

const Summary = () => {
  const { transactions } = useContext(TransactionsContext);

  const totalTransactions = transactions.length;
  const totalAmount = transactions.reduce((sum, transaction) => sum + transaction.amount, 0);
  const highestTransaction = transactions.reduce((prev, current) => (prev.amount > current.amount ? prev : current));
  const lowestTransaction = transactions.reduce((prev, current) => (prev.amount < current.amount ? prev : current));

  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Text style={styles.totalAmount}>${totalAmount.toFixed(2)}</Text>
        <Text style={styles.totalTransactions}>Number of Transactions: {totalTransactions}</Text>
      </View>
      <View style={styles.detailsSection}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Highest Transaction</Text>
          <Text style={styles.cardAmount}>${highestTransaction.amount.toFixed(2)}</Text>
          <Text style={styles.cardDetail}>Name: {highestTransaction.name}</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Lowest Transaction</Text>
          <Text style={styles.cardAmount}>${lowestTransaction.amount.toFixed(2)}</Text>
          <Text style={styles.cardDetail}>Name: {lowestTransaction.name}</Text>
        </View>
      </View>
    </View>
  );
};

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  topSection: {
    height: height * 0.25,
    backgroundColor: '#4CAF50', // Green background
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
    borderRadius: 10,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5, // Android shadow
  },
  totalAmount: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
  },
  totalTransactions: {
    fontSize: 20,
    fontWeight: '500',
    color: '#fff',
    marginTop: 8,
  },
  detailsSection: {
    flex: 1,
    //padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 3, // Android shadow
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  cardAmount: {
    fontSize: 24,
    fontWeight: '600',
    color: '#4CAF50',
    marginBottom: 4,
  },
  cardDetail: {
    fontSize: 18,
    color: '#555',
  },
});

export default Summary;
