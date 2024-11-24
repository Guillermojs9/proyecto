import { FlatList, StyleSheet, Image, View } from 'react-native';
import { Movie } from './src/Movie';
import React, { useEffect, useState } from 'react';
import { fetchMovies } from './src/FetchAxios';

export default function App() {
  const [movies, setMovies] = useState<Movie[]>([]);
  useEffect(() => {
    (async function () {
      const movies = await fetchMovies();
      setMovies(movies);
    })();
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        renderItem={({ item }) => <Image
        style={styles.Image}
          source={{
            uri: `https://image.tmdb.org/t/p/original${item.poster}`,
          }}
        />}
        keyExtractor={item => "p" + item.id}
      />
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
  Image: {
    height: 500,
    width: 300
  }
});
