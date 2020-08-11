import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import Header from './components/Header'
import StartScreen from './screens/StartScreen'
import GameScreen from './screens/GameScreen'
import GameOverScreen from './screens/GameOverScreen'

const App = () => {
  const [selectedNumber, setSelectedNumber] = useState()
  const [guessRounds, setGuessRounds] = useState(0)

  const gameOverHandler = numOfRounds => setGuessRounds(numOfRounds)

  const restartGameHandler = () => {
    setSelectedNumber(null)
    setGuessRounds(0)
  }

  let currentScreen = <StartScreen setSelectedNumber={setSelectedNumber}/>

  if (selectedNumber && guessRounds <= 0) {
    currentScreen = (
      <GameScreen 
        selectedNumber={selectedNumber} 
        onGameOver={gameOverHandler}
      />
    )
  } else if (guessRounds > 0) {
    currentScreen = (
      <GameOverScreen 
        selectedNumber={selectedNumber} 
        numberOfRounds={guessRounds} 
        onRestartGame={restartGameHandler}
      />
    )
  }

  return (
    <View style={styles.container}>
      {guessRounds <= 0 && <Header title='Guess the Number'/>}
      {currentScreen}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})

export default App
