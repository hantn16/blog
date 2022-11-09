import { StyleSheet } from 'react-native';
import React, { useContext } from 'react';
import BlogPostForm from '../components/BlogPostForm';
import { Context as BlogPostContext } from '../context/BlogContext';

const EditScreen = ({ navigation }) => {
  const id = navigation.getParam('id');
  const { state, editBlogPost } = useContext(BlogPostContext);
  const { title, content } = state.find((item) => item.id === id);
  return (
    <BlogPostForm
      initialValues={{ title, content }}
      onSubmit={(title, content) =>
        editBlogPost(id, title, content, () => {
          navigation.pop();
        })
      }
    />
  );
};

export default EditScreen;

const styles = StyleSheet.create({});
