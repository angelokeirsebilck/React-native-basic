import React, { useState } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const ColorScreen = () => {
  const [colors, setColors] = useState([]);

  const addColors = () => {
    setColors([...colors, createRandomRgb()]);
  };

  return (
    <View>
      <Button
        title={'Add random color'}
        onPress={() => {
          addColors();
        }}
      />
      <FlatList
        data={colors}
        keyExtractor={(color) => color}
        renderItem={({ item }) => {
          return <View style={{ width: 60, height: 60, backgroundColor: item }}></View>;
        }}
      />
    </View>
  );
};

const createRandomRgb = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return `rgb(${r},${g},${b})`;
};
const styles = StyleSheet.create({});
export default ColorScreen;
