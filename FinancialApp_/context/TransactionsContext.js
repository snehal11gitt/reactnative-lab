import React, { createContext, useState } from 'react';

export const TransactionsContext = createContext();

export const TransactionsProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([
    { id: '1', name: 'Walmart', amount: 50, date: '2024-10-01', address: '123 Main St', method: 'Credit Card', accountNumber: '**** 1234' },
    { id: '2', name: 'Rent', amount: 500, date: '2024-10-03', address: '456 Oak Ave', method: 'Bank Transfer', accountNumber: '**** 5678' },
    { id: '3', name: 'Pizza Hut', amount: 20, date: '2024-10-05', address: '789 Pine Rd', method: 'Cash', accountNumber: 'N/A' },
    { id: '4', name: 'Nike', amount: 100, date: '2024-10-07', address: '101 Maple St', method: 'Debit Card', accountNumber: '**** 9101' },
    { id: '5', name: 'Tim Hortons', amount: 5, date: '2024-10-09', address: '202 Elm St', method: 'Credit Card', accountNumber: '**** 1234' },
    { id: '6', name: 'Amazon', amount: 75, date: '2024-10-11', address: '303 Birch St', method: 'Credit Card', accountNumber: '**** 2345' },
    { id: '7', name: 'Electricity Bill', amount: 120, date: '2024-10-13', address: '404 Cedar Ave', method: 'Bank Transfer', accountNumber: '**** 6789' },
    { id: '8', name: 'Grocery Store', amount: 60, date: '2024-10-15', address: '505 Spruce Rd', method: 'Debit Card', accountNumber: '**** 3456' },
    { id: '9', name: 'Gas Station', amount: 40, date: '2024-10-17', address: '606 Walnut St', method: 'Credit Card', accountNumber: '**** 4567' },
    { id: '10', name: 'Pharmacy', amount: 30, date: '2024-10-19', address: '707 Chestnut Ave', method: 'Cash', accountNumber: 'N/A' },
  ]);

  return (
    <TransactionsContext.Provider value={{ transactions, setTransactions }}>
      {children}
    </TransactionsContext.Provider>
  );
};
