import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { colors } from '../constants/theme'
import Button from '../components/Button'

const GameOverScreen = ({ selectedNumber, numberOfRounds, onRestartGame }) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Game Over!</Text>
      <Text style={styles.subTitle}>The number was</Text>
      <Text style={styles.number}>{selectedNumber}</Text>
      <Text style={styles.subTitle}>Rounds: {numberOfRounds}</Text>
      <Button style={styles.button} onPress={onRestartGame} type='secondary'>NEW GAME</Button>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.primary,
  },
  title: {
    color: colors.white,
    fontSize: 30
  },
  subTitle: {
    color: colors.white,
    fontSize: 16,
  },
  number: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 60,
    margin: 20,
  },
  button: {
    margin: 40,
    color: colors.primary,
  }
})

export default GameOverScreen