import React, { useState, useEffect, useRef } from 'react'
import { View, Text, StyleSheet, Alert } from 'react-native'
import { generateRandomBetween } from '../utils'
import { colors } from '../constants/theme'
import { Ionicons } from '@expo/vector-icons'
import Card from '../components/Card'
import Button from '../components/Button'

const GameScreen = ({ selectedNumber, onGameOver }) => {
  const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, selectedNumber))
  const [rounds, setRounds] = useState(0)
  const minGuess = useRef(1)
  const maxGuess = useRef(99)

  useEffect(() => {
    if (currentGuess === selectedNumber) onGameOver(rounds)
  }, [currentGuess, selectedNumber, onGameOver])

  const guessAgainHandler = direction => {
    if (
      (direction === 'lower' && currentGuess < selectedNumber) || 
      (direction === 'higher' && currentGuess > selectedNumber)
    ) {
      Alert.alert("Don't lie!", "You know the hint is wrong", [{text: 'Ok', style: 'cancel'}])
      return
    } 
    if (direction === 'lower') maxGuess.current = currentGuess
    else if (direction === 'higher') minGuess.current = currentGuess
    
    setCurrentGuess(generateRandomBetween(minGuess.current, maxGuess.current, currentGuess))
    setRounds(currentRounds => currentRounds + 1)
  }

  return (
    <View style={styles.screen}>
      <Card style={styles.card}>
        <Text style={styles.title}>Computer Guess</Text>
        <Text style={styles.number}>{currentGuess}</Text>
        <View style={styles.buttonSection}>
          <Button onPress={() => guessAgainHandler('lower')}>
            <Ionicons name='md-remove' size={24}/>
          </Button>
          <Button onPress={() => guessAgainHandler('higher')}>
            <Ionicons name='md-add' size={24}/>
          </Button>
        </View>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: colors.neutral,
    fontSize: 16,
  },
  card: {
    alignItems: "center",
    width: "80%",
  },
  number: {
    color: colors.primary,
    textAlign: 'center',
    fontSize: 60,
    margin: 20,
  },
  buttonSection: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  }
})

export default GameScreen