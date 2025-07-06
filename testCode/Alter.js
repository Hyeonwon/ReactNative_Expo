import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Alter() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>✅ 이게 보이면 App.js가 정상적으로 반영된 겁니다!</Text>
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
