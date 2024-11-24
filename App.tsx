import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Movie } from './src/Movie';
import { MoviesResponse, Result } from './src/dataMovies';
import { movieMapper } from './src/movieMapper';
import axios from 'axios';
const url_base = "https://api.themoviedb.org/3/movie/now_playing";
const api_key = "c76ed6d50b96d2bfc0920abaeade0be3";

(async function () {
  const response = await axios.get<MoviesResponse>(`${url_base}?api_key=${api_key}`)
  const movies: Movie[] = response.data.results.map((item: Result) => movieMapper(item));
  console.log(movies);
})();

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
