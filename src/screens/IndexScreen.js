import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';

import BlogContext from '../context/BlogContext';

const IndexScreen = () => {
  const { data, addBlogPost } = useContext(BlogContext);
  return (
    <View>
      <Text>IndexScreen</Text>
      <Button title="Add a blog post" onPress={addBlogPost} />
      <FlatList
        data={data}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => {
          return <Text>{item.title}</Text>;
        }}
      />
    </View>
  );
};

export default IndexScreen;

const styles = StyleSheet.create({});
