import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'red',
  },
});

const Error: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{'BAIXE O APP DOS CANAIS OFICIAIS.'}</Text>
    </View>
  );
};

export default Error;
