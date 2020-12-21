import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

const ImageDetail = ({ text, image }) => {
  return (
    <View>
      <Image source={image} />
      <Text>{text}</Text>
    </View>
  );
};
const styles = StyleSheet.create({});

export default ImageDetail;
