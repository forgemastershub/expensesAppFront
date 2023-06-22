import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ExpenseDetailScreen = ({ route }) => {
  const { title, amount } = route.params;
    
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.amount}>${amount.toFixed(2)}</Text>
      {/* Aquí es donde querrías mostrar más detalles sobre el gasto. */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  amount: {
    fontSize: 20,
  },
});

export default ExpenseDetailScreen;
