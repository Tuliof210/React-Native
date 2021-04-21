// ========== expo core ========== //
import { StatusBar } from 'expo-status-bar';

// ========== react core ========== //
import React from 'react';
import { StyleSheet, View } from 'react-native';

// ========== custom components ========== //
import First from './src/components/First';

export default (): JSX.Element => (
  <View style={styles.container}>
    <First info={'Olha, mais um olá mundo'}></First>
    <StatusBar style="auto" />
  </View>
);

// ========== styles ========== //
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333',
  },
});
