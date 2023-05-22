import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {API} from 'aws-amplify';
import {listPosts} from '../../graphql/queries';
import Card from '../Card';
import TabFilter from '../TabFilter';
import styles from '../Button/styles';

const PostsList = () => {
  const [posts, setPosts] = useState([]);
  console.log(posts[0]);
  const fetchPost = async () => {
    try {
      const response = await API.graphql({query: listPosts});
      setPosts(response.data?.listPosts.items);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchPost();
  }, []);
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
