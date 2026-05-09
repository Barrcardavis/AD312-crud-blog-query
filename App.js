import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import PostList from './components/PostList';
import SinglePost from './components/SinglePost';
import CreatePost from './components/CreatePost';
import DeletePost from './components/DeletePost';
import UpdatePost from './components/UpdatePost';
import { ScrollView } from 'react-native-web';



const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ScrollView style={styles.container}>
        <PostList />
        <SinglePost id={1} />
        <CreatePost />
        <UpdatePost />
        <DeletePost />
        
        <StatusBar style="auto" />
      </ScrollView>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingHorizontal: 16,
  },
});
