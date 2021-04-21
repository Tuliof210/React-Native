import React from 'react';
import { StyleSheet, Text } from 'react-native';

type FirstProps = {
  info?: string;
};

export default (props: FirstProps): JSX.Element => (
  <Text style={styles.character}>{props.info}</Text>
);

const styles = StyleSheet.create({
  character: {
    color: '#f05',
    fontSize: 25,
    fontWeight: '700',
  },
});
