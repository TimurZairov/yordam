import React, {useState} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import Card from '../Card';
import TabFilter from '../TabFilter';
import styles from '../Button/styles';
import {useQuery} from '@apollo/client';
import {postsByDate} from './queries';

const PostsList = () => {
  const [isLoadMore, setIsLoadMore] = useState(false);
  const {data, loading, error, refetch, fetchMore} = useQuery(postsByDate, {
    variables: {type: 'POST', sortDirection: 'DESC', limit: 1},
  }); // second parameter of options = {limits of query}
  if (loading) {
    return <ActivityIndicator />;
  }
  //add component for Error message
  if (error) {
    return <Text>{error.message}</Text>;
  }
  //POSTS from hook useQuery
  const posts = (data?.postsByDate?.items || []).filter(
    posts => !posts._deleted,
  );

  const nextToken = data?.postsByDate?.nextToken;

  const loadMore = async () => {
    if (!nextToken || isLoadMore) {
      return;
    }
    setIsLoadMore(true);
    await fetchMore({variables: {nextToken}});
    setIsLoadMore(false);
  };

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
      onEndReached={loadMore}
    />
  );
};

export default PostsList;
