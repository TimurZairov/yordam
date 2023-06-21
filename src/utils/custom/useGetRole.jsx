import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const useGetRole = () => {
  const [isChecked, setIsChecked] = useState(null);

  useEffect(() => {
    const checkRoleHandler = async () => {
      try {
        const result = await AsyncStorage.getItem('profile');
        setIsChecked(JSON.parse(result));
      } catch (e) {
        console.log(e);
      }
    };
    checkRoleHandler();
  }, []);

  return [isChecked];
};

export default useGetRole;
