// Optimized FlatList with keyExtractor and getItemLayout
import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

const DATA = Array.from({length: 1000}, (_, i) => ({id: i, title: `Item ${i}`}));

const OptimizedFlatList = () => {
  return (
    <FlatList
      data={DATA}
      keyExtractor={(item) => item.id.toString()}
      getItemLayout={(data, index) => ({
        length: 50,
        offset: 50 * index,
        index,
      })}
      renderItem={({item}) => (
        <View style={styles.itemContainer}>
          <Text>{item.title}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    height: 50,
    justifyContent: 'center',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default OptimizedFlatList;