import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { useQuery } from '@tanstack/react-query';

async function fetchPostById(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return res.json();
}

export default function SinglePost({ id }) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['single-post', id],
    queryFn: () => fetchPostById(id),
  });

  if (isLoading) return <ActivityIndicator size="large" color="#000" />;
  if (error) return <Text>Error loading post</Text>;

  return (
  <View style={styles.container}>
    <Text style={styles.header}>Single Post</Text>
    <Text style={styles.title}>{data.title}</Text>
    <Text>{data.body}</Text>
  </View>
);

}

const styles = StyleSheet.create({
  container: { padding: 20 },
  header: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  title: { fontWeight: 'bold', fontSize: 18, marginBottom: 10 },
});

