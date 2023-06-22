import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ProfileScreen = ({ navigation }) => {
  // Supongamos que estos son los detalles del perfil del usuario.
  // En una aplicación real, probablemente obtendrías estos datos de tu API.
  const [username, setUsername] = useState('Username');
  const [email, setEmail] = useState('email@example.com');

  const handleLogout = () => {
    // Aquí es donde querrías manejar el cierre de sesión.
    // Por ejemplo, podrías hacer una llamada a tu API aquí.
    navigation.replace('Login');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <Text style={styles.detail}>Username: {username}</Text>
      <Text style={styles.detail}>Email: {email}</Text>
      <Button title="Logout" onPress={handleLogout} />
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
  detail: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default ProfileScreen;
