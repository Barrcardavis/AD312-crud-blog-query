import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useMutation } from '@tanstack/react-query';

async function deletePost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: 'DELETE',
  });
  return res.status; // JSONPlaceholder returns 200 for success
}

export default function DeletePost() {
  const [id, setId] = useState('');

  const mutation = useMutation({
    mutationFn: deletePost,
  });

  const handleDelete = () => {
    mutation.mutate(id);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Delete a Post</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Post ID"
        value={id}
        onChangeText={setId}
        keyboardType="numeric"
      />

      <Button title="Delete Post" onPress={handleDelete} />

      {mutation.isPending && <Text>Deleting...</Text>}
      {mutation.isSuccess && (
        <Text style={styles.success}>Post deleted (fake)!</Text>
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
  success: { marginTop: 10, color: 'green', fontWeight: 'bold' },
});
