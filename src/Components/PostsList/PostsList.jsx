import React from 'react';
import {FlatList, Text, View} from 'react-native';
import posts from '../../data/posts.json';
import Card from '../Card';
import TabFilter from '../TabFilter';
import styles from '../Button/styles';

const PostsList = () => {
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
