import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useMutation } from '@tanstack/react-query';

async function createPost(newPost) {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(newPost),
  });
  return res.json();
}

export default function CreatePost() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const mutation = useMutation({
    mutationFn: createPost,
  });

  const handleSubmit = () => {
    mutation.mutate({ title, body });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create a New Post</Text>

      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        style={[styles.input, styles.bodyInput]}
        placeholder="Body"
        value={body}
        onChangeText={setBody}
        multiline
      />

      <Button title="Submit" onPress={handleSubmit} />

      {mutation.isPending && <Text>Submitting...</Text>}
      {mutation.isSuccess && (
        <View style={styles.result}>
          <Text style={styles.resultTitle}>Post Created!</Text>
          <Text>ID: {mutation.data.id}</Text>
          <Text>Title: {mutation.data.title}</Text>
          <Text>Body: {mutation.data.body}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginTop: 20 },
  header: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 10,
    borderRadius: 4,
  },
  bodyInput: { height: 80 },
  result: { marginTop: 20, padding: 10, backgroundColor: '#eee' },
  resultTitle: { fontWeight: 'bold', marginBottom: 5 },
});
