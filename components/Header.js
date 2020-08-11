import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Header = ({ title }) => (
  <View style={styles.header}>
    <Text style={styles.text}>{title}</Text>
  </View>
)

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F7B733',
    elevation: 5,
  },
  text: {
    color: '#fff',
    fontSize: 23,
  }
})
export default Header