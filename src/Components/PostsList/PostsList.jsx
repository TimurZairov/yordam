import React, {useState} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import Card from '../Card';
import TabFilter from '../TabFilter';
import styles from '../Button/styles';
import {useQuery} from '@apollo/client';
import {listUsers, postsByDate} from './queries';
import UserCard from '../UserCard/UserCard';

const filterButtonArray = ['Все', 'Ремонт', 'Уборка', 'Водитель', 'Няня'];

const PostsList = ({fetchValue}) => {
  const [isLoadMore, setIsLoadMore] = useState(false);
  const [category, setCategory] = useState('');

  const {data, loading, error, refetch, fetchMore} = useQuery(postsByDate, {
    variables: {
      type: 'POST',
      sortDirection: 'DESC',
      limit: 10,
      filter: {
        category: {contains: category}, // Фильтрация по значению
      },
    },
  }); // second parameter of options = {limits of query}

  //query usersList
  const {
    data: usersData,
    loading: usersLoading,
    error: usersError,
    refetch: usersRefetch,
    fetchMore: usersFetchMore,
  } = useQuery(listUsers, {
    variables: {
      limit: 10,
    },
  });
  //Get userList
  const userList = (usersData?.listUsers.items || []).filter(user => {
    return !user.employer;
  });

  if (loading || usersLoading) {
    return <ActivityIndicator />;
  }
  //add component for Error message
  if (error || usersError) {
    return <Text>{error.message}</Text>;
  }

  //POSTS from hook useQuery
  let posts = (data?.postsByDate?.items || []).filter(posts => !posts._deleted);
  //token for next 10 post load
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
            <TabFilter
              setCategory={setCategory}
              filterButtonArray={filterButtonArray}
            />
          </View>
        </>
      }
      data={fetchValue === 'tabPost' ? posts : userList}
      renderItem={({item}) => {
        return fetchValue === 'tabPost' ? (
          <Card post={item} />
        ) : (
          <UserCard userList={item} />
        );
      }}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
      onRefresh={() => refetch() || usersRefetch()}
      refreshing={loading}
      onEndReached={loadMore}
    />
  );
};

export default React.memo(PostsList);
