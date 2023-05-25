import React from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import Card from '../Card';
import TabFilter from '../TabFilter';
import styles from '../Button/styles';
import {useQuery} from '@apollo/client';
import {listPosts} from './queries';

//from '../../graphql/queries';

const PostsList = () => {
  //FETCH POST WAS
  // const fetchPost = async () => {
  //   try {
  //     const response = await API.graphql({query: listPosts});
  //     setPosts(response.data?.listPosts.items);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };
  const {data, loading, error} = useQuery(listPosts, {variables: {limit: 1}}); // second parameter of options = {limits of query}

  if (loading) {
    return <ActivityIndicator />;
  }
  //add component for Error message
  if (error) {
    return <Text>{e.message}</Text>;
  }
  //POSTS from hook useQuery
  const posts = data?.listPosts?.items || [];

  // useEffect(() => {
  //   setPosts(data.listPosts.items);
  // }, [data]);

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
    />
  );
};

export default PostsList;
