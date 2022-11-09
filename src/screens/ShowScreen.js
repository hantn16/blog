import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useContext } from 'react';
import { FontAwesome } from '@expo/vector-icons';

import { Context as BlogContext } from '../context/BlogContext';

const ShowScreen = ({ navigation }) => {
  const blogPostId = navigation.getParam('id');
  const { state } = useContext(BlogContext);
  const blogPost = state.find((item) => item.id === blogPostId);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{blogPost.title}</Text>
      <Text style={styles.content}>{blogPost.content}</Text>
    </View>
  );
};
ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Edit', { id: navigation.getParam('id') })
        }
      >
        <FontAwesome name="pencil-square-o" size={35} />
      </TouchableOpacity>
    ),
  };
};
export default ShowScreen;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'pink',
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 10,
    textDecorationLine: 'underline',
  },
});
