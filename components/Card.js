import React from 'react'
import { View, StyleSheet } from 'react-native'

const Card = ({ children, style }) => (
  <View style={{ ...styles.card, ...style}}>
    {children}
  </View>
)

const styles = StyleSheet.create({
  card: {
    padding: 20,
    backgroundColor: "#fff",
    elevation: 5,
    borderRadius: 20,
  }
})

export default Card
