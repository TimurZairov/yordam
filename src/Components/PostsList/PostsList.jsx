import React, {useEffect} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import Card from '../Card';
import TabFilter from '../TabFilter';
import styles from '../Button/styles';
import {gql, useQuery} from '@apollo/client';

//from '../../graphql/queries';
export const listPosts = gql/* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        price
        adress
        lat
        long
        description
        userID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;

const PostsList = () => {
  // const [posts, setPosts] = useState([]);
  const {data, loading, error} = useQuery(listPosts);
  //FETCH POST
  // const fetchPost = async () => {
  //   try {
  //     const response = await API.graphql({query: listPosts});
  //     setPosts(response.data?.listPosts.items);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  if (loading) {
    return <ActivityIndicator />;
  }
  if (error) {
    return <Text>{e.message}</Text>;
  }
  //POSTS from hook useQuery
  const posts = data.listPosts?.items;

  useEffect(() => {}, []);
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
