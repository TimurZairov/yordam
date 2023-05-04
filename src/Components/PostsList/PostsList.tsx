import React from 'react';
import {FlatList} from 'react-native';
import posts from '../../data/posts.json';
import Card from '../Card';

const PostsList = () => {
  return (
    <FlatList
      data={posts}
      renderItem={({item}) => {
        return <Card post={item} />;
      }}
      keyExtractor={item => item.id}
    />
  );
};

export default PostsList;
