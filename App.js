import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Components/Header'
import StartGameScreen from './screens/StartGameScreen'
import GameScreen from './screens/GameScreen'
import GameOverScreen from './screens/GameOverScreen'
import * as Font from 'expo-font'
import {AppLoading} from 'expo'

const fetchFonts = () => {
return Font.loadAsync({
  'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'), 
  'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'), 
  'TradeWindsRegular': require('./assets/fonts/TradeWinds-Regular.ttf')
})
}


export default function App() {


const [dataLoaded, setDataLoaded] = useState(false)


const [userNumber, setUserNumber] = useState()
const [guessRounds, setGuessRounds] = useState(0)

if(!dataLoaded){
  return <AppLoading startAsync= {fetchFonts} onFinish= {() => setDataLoaded(true)}/>
}




const startGameHandler = (selectedNumber) => {
  setUserNumber(selectedNumber)
  setGuessRounds(0)
}

const gameOverHanlder = numOfRounds => {
  setGuessRounds( numOfRounds)
}

const handleResetGame = () => {
  setGuessRounds(0)
  setUserNumber(0)
}

let content = <StartGameScreen onStartGame = {startGameHandler}/>

if(userNumber && guessRounds <= 0){
  content =  <GameScreen userChoice = {userNumber} onGameOver={gameOverHanlder}/>
}
else if(guessRounds > 0){
  content = <GameOverScreen rounds={guessRounds} userNumber={userNumber} playAgain={handleResetGame}/>
}

  return (
    <View style={styles.screen}>
      <Header title="Guess a number"/>
       {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
});
