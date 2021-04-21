// ========== expo core ========== //
import { StatusBar } from 'expo-status-bar';

// ========== react core ========== //
import React from 'react';
import { StyleSheet, View } from 'react-native';

// ========== styles ========== //
import rootStyle from './src/styles/main';

// ========== custom components ========== //
import First from './src/components/First';

export default (): JSX.Element => (
  <View style={[rootStyle.container, styles.backGround]}>
    <First info={'Olha, mais um olá mundo'}></First>
    <StatusBar style="auto" />
  </View>
);

// ========== styles ========== //
const styles = StyleSheet.create({
  backGround: {
    backgroundColor: '#205',
  },
});
