import React from 'react';
import { StyleSheet, Text, View, Linking, ScrollView, TouchableOpacity } from 'react-native';

export default function Portfolios() {
  const handlePressGithub = () => {
    Linking.openURL('https://github.com/Hyeonwon');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>포트폴리오</Text>
      
      <Text style={styles.sectionTitle}>👤 소개</Text>
      <Text style={styles.text}>
        안녕하세요! 저는 React Native 기반의 앱 개발과 프론트엔드에 관심이 많은 개발자입니다.
      </Text>

      <Text style={styles.sectionTitle}>🛠 기술 스택</Text>
      <Text style={styles.text}>- React, React Native, JavaScript</Text>
      <Text style={styles.text}>- Expo, Firebase, GitHub Actions</Text>
      <Text style={styles.text}>- HTML/CSS, Node.js, Express</Text>

      <Text style={styles.sectionTitle}>📂 프로젝트</Text>
      <Text style={styles.text}>1. GeoMemo: 위치 기반 메모 앱</Text>
      <Text style={styles.text}>2. Portfolio App: 자기소개 모바일 앱</Text>

      <Text style={styles.sectionTitle}>📫 연락처</Text>
      <TouchableOpacity onPress={handlePressGithub}>
        <Text style={styles.link}>🔗 GitHub: github.com/Hyeonwon</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    paddingBottom: 60,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 10,
    color: '#333',
  },
  text: {
    fontSize: 16,
    marginBottom: 8,
    color: '#444',
  },
  link: {
    fontSize: 16,
    color: '#007AFF',
    textDecorationLine: 'underline',
  },
});
