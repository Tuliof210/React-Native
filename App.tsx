import { StatusBar } from 'expo-status-bar';

import React from 'react';
import { StyleSheet, View } from 'react-native';

import First from './src/components/First';

import rootStyle from './src/styles/main';

export default (): JSX.Element => (
  <View style={[rootStyle.container, styles.backGround]}>
    <First info={'Olha, mais um olá mundo'}></First>
    <StatusBar style="auto" />
  </View>
);

const styles = StyleSheet.create({
  backGround: {
    backgroundColor: '#205',
  },
});
