import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useState } from 'react';

const BlogPostForm = ({ onSubmit, initialValues }) => {
  const [title, setTitle] = useState(initialValues.title);
  const [content, setContent] = useState(initialValues.content);
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter title:</Text>
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={(newText) => setTitle(newText)}
      />
      <Text style={styles.label}>Enter content:</Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(newText) => setContent(newText)}
      />
      <Button title="Save" onPress={() => onSubmit(title, content)} />
    </View>
  );
};

BlogPostForm.defaultProps = {
  initialValues: {
    title: '',
    content: '',
  },
};
export default BlogPostForm;

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    fontSize: 18,
    padding: 3,
    borderWidth: 1,
    marginBottom: 15,
  },
});
