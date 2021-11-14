import React, { useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  Alert
} from 'react-native';
import Card from '../../components/card/card';
import CustomInput from '../../components/custom-input/custom-input';
import colors from '../../constants/colors';

export default function StartGame(props) {

  const [inputText, setInputText] = useState('');
  const [isChosenNumber, setIsChosenNumber] = useState(false);
  const [inputNumber, setInputNumber] = useState('');

  const onValidateTextHandler = (text) => {
    setInputText(text.replace((/[^0-9]/g), ''));
  }

  const onInputConfirmHandler = () => {
    const inputValue = parseInt(inputText);
    if (inputValue !== NaN || inputValue < 0 || inputValue > 99 || inputValue !== '') {
      setIsChosenNumber(true);
      setInputNumber(inputValue);
    } else {
      setIsChosenNumber(false);
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Text style={styles.title}>Start a new game</Text>
        <Card style={styles.inputContainer}>
          <Text>Select a number</Text>
          <CustomInput
            keyboardType="numeric"
            maxLength={2}
            onChangeText={onValidateTextHandler}
            value={inputText}
          />
          <View style={styles.buttonsContainer}>
            <View style={styles.button} color={colors.primary}>
              <Button title="Start" onPress={() => {
                Alert.alert(
                  'Hello',
                  'lorem10',
                  [{ text: "Click me", style: 'destructive', onPress: onInputConfirmHandler }]
                )
              }} />
            </View>
            <View style={styles.button}>
              <Button title="Reset" color="red" onPress={() => setIsChosenNumber(false)}/>
            </View>
          </View>
          {isChosenNumber
            ?
            <Text>Game begin with number: {inputNumber}</Text>
            :
            <>
            </>
          }
        </Card>
      </View>
    </TouchableWithoutFeedback>
  )
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: {
    fontSize: 23,
    marginVertical: 10
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonsContainer: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    width: "45%"
  }
});
