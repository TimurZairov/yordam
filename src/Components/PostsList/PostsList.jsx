import React from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import Card from '../Card';
import TabFilter from '../TabFilter';
import styles from '../Button/styles';
import {useQuery} from '@apollo/client';
import {listPosts} from './queries';

const PostsList = () => {
  const {data, loading, error, refetch} = useQuery(listPosts); // second parameter of options = {limits of query}
  if (loading) {
    return <ActivityIndicator />;
  }
  //add component for Error message
  if (error) {
    return <Text>{error.message}</Text>;
  }
  //POSTS from hook useQuery
  const posts = data?.listPosts?.items || [];

  return (
    <FlatList
      ListHeaderComponent={
        <>
          <Text style={styles.titleHeader}>Популярные</Text>
          <View style={styles.flatHeader}>
            <TabFilter />
          </View>
        </>
      }
      data={posts}
      renderItem={({item}) => {
        return <Card post={item} />;
      }}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
      onRefresh={() => refetch()}
      refreshing={loading}
    />
  );
};

export default PostsList;
