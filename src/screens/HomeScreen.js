import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import ExpenseItem from '../components/ExpenseItem';

const HomeScreen = () => {
  const [expenses, setExpenses] = useState([]);

  // Esto es solo para simular la carga de datos. Deberías reemplazarlo
  // con una llamada a tu API o base de datos.
  useEffect(() => {
    const timer = setTimeout(() => {
      setExpenses([
        { id: '1', title: 'Groceries', amount: 50.00 },
        { id: '2', title: 'Rent', amount: 1000.00 },
        { id: '3', title: 'Car Insurance', amount: 200.00 },
      ]);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis Gastos</Text>
      <FlatList
        data={expenses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ExpenseItem title={item.title} amount={item.amount} />}
      />
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
});

export default HomeScreen;
