/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

/** {@link https://github.com/react-native-training/react-native-fonts#android */
const names = Platform.OS === 'android' ?
  [
    'sans-serif',
    'sans-serif-light',
    'sans-serif-thin',
    'sans-serif-condensed',
    'sans-serif-medium',
  ] :
  [];
const weights = [100, 200, 300, 400, 500, 600, 700, 800, 900];

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        {names.map((fontFamily) => (
          <Text
            key={fontFamily}
            style={[
              styles.text,
              { fontFamily }
            ]}
          >
            Hamburgfontsiv{` (${fontFamily})`}
          </Text>
        ))}

        {weights.map((weight) => (
          <Text
            key={weight}
            style={[
              styles.text,
              { fontWeight: weight.toString() },
            ]}
          >
            Hamburgfonstiv{` (${weight})`}
          </Text>
        ))}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  text: {
    color: 'black',
    marginVertical: 4,
  },
});
