import { StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';

import { Context as BlogContext } from '../context/BlogContext';

const ShowScreen = ({ navigation }) => {
  const blogPostId = navigation.getParam('id');
  const { state } = useContext(BlogContext);
  const blogPost = state.find((item) => item.id === blogPostId);
  return (
    <View>
      <Text>{blogPost.title}</Text>
    </View>
  );
};

export default ShowScreen;

const styles = StyleSheet.create({});
