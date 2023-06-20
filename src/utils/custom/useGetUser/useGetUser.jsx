import React from 'react';
import {useQuery} from '@apollo/client';
import {getUser} from './queries';

function useGetUser(userId) {
  const {data, loading, error} = useQuery(getUser, {variables: {id: userId}});

  return [data, loading, error];
}

export default useGetUser;
