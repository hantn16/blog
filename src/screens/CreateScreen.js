import { StyleSheet } from 'react-native';
import React, { useContext } from 'react';
import { Context as BlogContext } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const CreateScreen = ({ navigation }) => {
  const { addBlogPost } = useContext(BlogContext);

  return (
    <BlogPostForm
      onSubmit={(title, content) =>
        addBlogPost(title, content, () => {
          navigation.pop();
        })
      }
    />
  );
};

export default CreateScreen;

const styles = StyleSheet.create({});
