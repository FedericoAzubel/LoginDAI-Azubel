import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Platform,
  StatusBar,
  StyleSheet,
} from 'react-native';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      {/* Ajuste manual del status bar en Android */}
      <View style={styles.statusBarSpacer} />

      <View style={styles.header}>
        <Text style={styles.headerText}>Login App (Azubel)</Text>
      </View>

      <View style={styles.logoContainer}>
        <Image
          source={require('./assets/coca.png')} // Cambiar por tu ruta
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#999"
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          placeholderTextColor="#999"
          secureTextEntry
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>INGRESAR</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.link}>¿Olvidaste la clave?</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.link}>Crear Cuenta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
  },
  statusBarSpacer: {
    height: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: '#7c3aed',
  },
  header: {
    backgroundColor: '#7c3aed',
    paddingVertical: 12,
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  logoContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  logo: {
    width: 250,
    height: 100,
  },
  form: {
    paddingHorizontal: 30,
    gap: 10,
  },
  input: {
    height: 45,
    borderColor: '#7c3aed',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#7c3aed',
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  link: {
    color: '#333',
    textAlign: 'center',
    marginTop: 10,
  },
});
