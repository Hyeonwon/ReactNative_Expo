import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Test() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Test 중 입니다. 잘 보이면 OK!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
  },

  text: {
    fontSize: 15,
    color: '#000',
    textAlign: 'center',
  },
});
