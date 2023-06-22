import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ExpenseItem = ({ title, amount }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.amount}>${amount.toFixed(2)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
    borderColor: '#ddd',
    borderWidth: 1,
  },
  title: {
    fontSize: 18,
  },
  amount: {
    fontSize: 18,
    color: '#333',
  },
});

export default ExpenseItem;
