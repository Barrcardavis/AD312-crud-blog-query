import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useMutation } from '@tanstack/react-query';

async function updatePost({ id, title, body }) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, body }),
  });
  return res.json();
}

export default function UpdatePost() {
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const mutation = useMutation({
    mutationFn: updatePost,
  });

  const handleUpdate = () => {
    mutation.mutate({ id, title, body });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Update a Post</Text>

      <TextInput
        style={styles.input}
        placeholder="Post ID"
        value={id}
        onChangeText={setId}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="New Title"
        value={title}
        onChangeText={setTitle}
      />

      <TextInput
        style={[styles.input, styles.bodyInput]}
        placeholder="New Body"
        value={body}
        onChangeText={setBody}
        multiline
      />

      <Button title="Update Post" onPress={handleUpdate} />

      {mutation.isPending && <Text>Updating...</Text>}
      {mutation.isSuccess && (
        <View style={styles.result}>
          <Text style={styles.resultTitle}>Post Updated!</Text>
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
