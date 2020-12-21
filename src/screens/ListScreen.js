import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

const ListScreen = () => {
  const friends = [
    {
      name: 'Friend #1',
      age: 21,
    },
    {
      name: 'Friend #2',
      age: 30,
    },
    {
      name: 'Friend #3',
      age: 26,
    },
    {
      name: 'Friend #4',
      age: 45,
    },
    {
      name: 'Friend #5',
      age: 21,
    },
    {
      name: 'Friend #6',
      age: 18,
    },
    {
      name: 'Friend #7',
      age: 22,
    },
  ];

  return (
    <FlatList
      keyExtractor={(friend) => {
        return friend.name;
      }}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    />
  );
};

export default ListScreen;
