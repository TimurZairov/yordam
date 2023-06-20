import React, {useState} from 'react';
import {Storage} from 'aws-amplify';

const useUserImage = () => {
  const [imageKey, setImageKey] = useState(null);

  const getImageHandler = async key => {
    try {
      const responseKey = await Storage.get(key);
      if (responseKey) {
        setImageKey(responseKey);
      }
    } catch (e) {
      console.log(e);
    }
  };
  return [imageKey, getImageHandler];
};

export default useUserImage;
