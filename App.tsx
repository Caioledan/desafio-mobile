import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Login } from './src/screens/Login/Login';
import { AuthProvider } from './src/contexts/AuthContext';
import { Routes } from './src/routes';
import AsyncStorage from '@react-native-async-storage/async-storage';

AsyncStorage.clear()

export default function App() {
  return (
      <AuthProvider>
        <Routes/>
      </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
