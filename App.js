import React from 'react';
import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Formulario from './src/componetes/login';
import { styles } from './appStyle';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.container} edges={['top', 'right', 'bottom', 'left']}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Login</Text>
        </View>
        <Formulario/>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
