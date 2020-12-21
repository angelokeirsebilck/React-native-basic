import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
  return (
    <View>
      <ImageDetail image={require('../../assets/beach.jpg')} text={'Beach'} />
      <ImageDetail image={require('../../assets/forest.jpg')} text={'Forest'} />
      <ImageDetail image={require('../../assets/mountain.jpg')} text={'Mountain'} />
    </View>
  );
};
const styles = StyleSheet.create({});
export default ImageScreen;
