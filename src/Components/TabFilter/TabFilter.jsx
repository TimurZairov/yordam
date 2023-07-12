import React, {useContext, useEffect, useRef, useState} from 'react';
import {FlatList, Pressable, Text} from 'react-native';
import styles from './style';
import {AppContext} from '../../context/Context';

const filterButtonArray = ['Все', 'Ремонт', 'Уборка', 'Водитель', 'Няня'];

const TabFilter = ({setCategory, create, edit}) => {
  const [jobsArray, setJobsArray] = useState([]);
  const {activeTab, setActiveTab} = useContext(AppContext);
  const flatListRef = useRef();

  const activeHandler = item => {
    if (edit) {
      console.log('ok');
    }
    filterButtonArray.map((i, idx) => {
      if (i === item) {
        setActiveTab(idx);
      }
    });
    if (item === 'Все') {
      setCategory('');
    } else {
      setCategory(item);
    }
  };

  const getItemLayout = (data, index) => {
    let width = 50;
    return {
      length: width,
      offset: width * index,
      index,
    };
  };

  useEffect(() => {
    flatListRef.current.scrollToIndex({
      index: activeTab,
      animated: true,
    });
  }, [activeTab]);

  return (
    <FlatList
      data={create || edit ? filterButtonArray.slice(1) : filterButtonArray}
      keyExtractor={(item, index) => item + index}
      horizontal={true}
      ref={flatListRef}
      showsHorizontalScrollIndicator={false}
      renderItem={({item, index}) => {
        return (
          <Pressable
            style={styles.filterButton}
            onPress={() => activeHandler(item)}>
            <Text style={activeTab === index ? styles.textActive : styles.text}>
              {item}
            </Text>
          </Pressable>
        );
      }}
      getItemLayout={getItemLayout}
    />
  );
};

export default TabFilter;
