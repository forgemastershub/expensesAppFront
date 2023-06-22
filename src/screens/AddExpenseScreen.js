import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

const AddExpenseScreen = ({ navigation }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [expenseType, setExpenseType] = useState("");

  const handleAddExpense = () => {
    // Aquí es donde querrías manejar la adición de un nuevo gasto.
    // Por ejemplo, podrías hacer una llamada a tu API aquí.
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Amount"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
      />
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={expenseType}
          onValueChange={(itemValue) => setExpenseType(itemValue)}
        >
          <Picker.Item label="Select Expense Type" value="" />
          <Picker.Item label="Fijo" value="fijo" />
          <Picker.Item label="Variable" value="variable" />
          <Picker.Item label="Comida" value="comida" />
          <Picker.Item label="Transporte" value="transporte" />
          <Picker.Item label="Entretenimiento" value="entretenimiento" />
        </Picker>
      </View>
      <Button title="Add Expense" onPress={handleAddExpense} style={styles.button} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  input: {
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingLeft: 10,
    borderRadius: 10,
  },
  button: {
    borderRadius: 20,
  },
  pickerContainer: {
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
  },
});

export default AddExpenseScreen;
