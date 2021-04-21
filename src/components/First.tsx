import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default (props: FirstProps): JSX.Element => (
  <Text style={styles.character}>{props.info}</Text>
);

// ========== styles ========== //
const styles = StyleSheet.create({
  character: {
    color: '#f05',
    fontSize: 25,
    fontWeight: '700',
  },
});

// ========== types and interfaces ========== //
type FirstProps = {
  info?: string;
};
