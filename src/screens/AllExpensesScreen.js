import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import ExpenseItem from '../components/ExpenseItem';

const ExpensesScreen = () => {
  // Ejemplo de datos de gastos
  const expensesData = [
    { id: 1, title: 'Comida 1', amount: 10, type: 'comida' },
    { id: 2, title: 'Transporte 1', amount: 20, type: 'transporte' },
    { id: 3, title: 'Comida 2', amount: 15, type: 'comida' },
    { id: 4, title: 'Entretenimiento 1', amount: 30, type: 'entretenimiento' },
    { id: 5, title: 'Transporte 2', amount: 25, type: 'transporte' },
  ];

  const [selectedExpense, setSelectedExpense] = useState(null);

  const handleExpensePress = (expense) => {
    setSelectedExpense(expense);
  };

  const handleCloseModal = () => {
    setSelectedExpense(null);
  };

  // Agrupar gastos por tipo
  const groupedExpenses = expensesData.reduce((acc, expense) => {
    if (!acc[expense.type]) {
      acc[expense.type] = [];
    }
    acc[expense.type].push(expense);
    return acc;
  }, {});

  return (
    <View style={styles.container}>
      {Object.keys(groupedExpenses).map((expenseType) => (
        <View key={expenseType} style={styles.expenseGroup}>
          <Text style={styles.expenseType}>{expenseType}</Text>
          <FlatList
            data={groupedExpenses[expenseType]}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.expenseItem}
                onPress={() => handleExpensePress(item)}
              >
                <ExpenseItem
                  style={styles.expenseList}
                  title={item.title}
                  amount={item.amount}
                />
              </TouchableOpacity>
            )}
          />
        </View>
      ))}
      <Modal visible={selectedExpense !== null} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {selectedExpense && (
              <View>
                <Text style={styles.modalTitle}>{selectedExpense.title}</Text>
                <Text style={styles.modalAmount}>{selectedExpense.amount}</Text>
              </View>
            )}
            <TouchableOpacity style={styles.modalCloseButton} onPress={handleCloseModal}>
              <Text style={styles.modalCloseButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  expenseGroup: {
    marginBottom: 20,
  },
  expenseType: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  expenseItem: {
    width: '100%',
  },
  expenseList: {
    width: '100%',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'black',
    width: '80%',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalAmount: {
    fontWeight: 'bold',
  },
  modalCloseButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
    alignItems: 'center',
  },
  modalCloseButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ExpensesScreen;
