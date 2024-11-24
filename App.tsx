import { FlatList, StyleSheet, Image, View, ScrollView } from 'react-native';
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
      <ScrollView horizontal={true}>
        {movies.map((item) => (
          <Image
            key={item.id.toString()}
            style={styles.Image}
            source={{
              uri: `https://image.tmdb.org/t/p/original${item.poster}`,
            }}
          />
        ))}
      </ScrollView>
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
    width: 270,
    height: 405,
    marginTop: 20,
    margin: 3,
  },
  ScrollView: {
    height: 400,
  }
});
