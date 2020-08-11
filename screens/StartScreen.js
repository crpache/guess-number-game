import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'
import Card from '../components/Card'
import Button from '../components/Button'
import { colors } from '../constants/theme'

const StartScreen = ({ setSelectedNumber }) => {
  const [inputValue, setInputValue] = useState('')

  const numberInputHandler = input => {
    const cleanValue = input.replace(/[^0-9]/g, '')
    setInputValue(cleanValue)
  }

  const startButtonHandler = () => {
    const number = parseInt(inputValue)
    if (isNaN(number)|| number <= 0) {
      Alert.alert(
        'Invalid Number!', 
        'Enter a number between 1 and 99', 
        [{ text: 'Accept', style: 'destructive', onPress: resetButtonHandler}],
      )
      return
    }
    Keyboard.dismiss()
    setSelectedNumber(number)
    setInputValue('')
  }

  const resetButtonHandler = () => setInputValue('')

  return (
    //for closing keyboard touching outside:
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.screen}>
        <Card style={styles.inputCard}>
          <Text style={styles.title}>Pick a number</Text>
          <TextInput 
            style={styles.input} 
            keyboardType="number-pad"
            maxLength={2}
            autoCorrect={false}
            blurOnSubmit
            onChangeText={numberInputHandler}
            value={inputValue}
          />
          <View style={styles.buttonSection}>
            <Button onPress={resetButtonHandler} type='secondary'>RESET</Button>
            <Button onPress={startButtonHandler}>START</Button>
          </View>
        </Card>
      </View>
    </TouchableWithoutFeedback>
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
  inputCard: {
    alignItems: "center",
    width: "80%",
  },
  input: {
    color: colors.primary,
    textAlign: 'center',
    fontSize: 60,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    width: 80,
    margin: 20,
  },
  buttonSection: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  }
})

export default StartScreen
