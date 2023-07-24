import React from 'react';
import {useQuery} from '@apollo/client';
import {getUser} from './queries';

function useGetUser(userId) {
  const {data, loading, error, refetch} = useQuery(getUser, {
    variables: {id: userId},
  });

  return [data, loading, error, refetch];
}

export default useGetUser;
