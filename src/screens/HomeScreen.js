import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = (props) => {
  const {
    navigation: { navigate },
  } = props;
  return (
    <View>
      <Text style={styles.text}>HomeScreen NEW</Text>
      <Button
        title='Go to Components Demo'
        onPress={() => {
          navigate('Components');
        }}
      />
      <Button
        title='Go to List Demo'
        onPress={() => {
          navigate('List');
        }}
      />
      <Button
        title='Go to Images'
        onPress={() => {
          navigate('ImageScreen');
        }}
      />
      <Button
        title='Go to Counter Screen'
        onPress={() => {
          navigate('Counter');
        }}
      />
      <Button
        title='Go to Color Screen'
        onPress={() => {
          navigate('Color');
        }}
      />
      <Button
        title='Go to Sqsuare Screen'
        onPress={() => {
          navigate('Square');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
