import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { useQuery } from '@tanstack/react-query';

async function fetchPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
}

export default function PostList() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

  if (isLoading) return <ActivityIndicator size="large" color="#000" />;
  if (error) return <Text>Error loading posts</Text>;

  return (
    <View style={styles.container}>
      {data.slice(0, 10).map((post) => (
        <View key={post.id} style={styles.post}>
          <Text style={styles.title}>{post.title}</Text>
          <Text>{post.body}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  post: { marginBottom: 20 },
  title: { fontWeight: 'bold', marginBottom: 5 },
});
