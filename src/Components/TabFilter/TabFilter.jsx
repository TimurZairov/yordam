import React, {useContext, useEffect, useRef} from 'react';
import {FlatList, Pressable, Text} from 'react-native';
import styles from './style';
import {AppContext} from '../../context/Context';

const filterButtonArray = ['Все', 'Ремонт', 'Уборка', 'Водитель', 'Няня'];

const TabFilter = ({setCategory, create}) => {
  const {activeTab, setActiveTab} = useContext(AppContext);
  const flatListRef = useRef();

  const activeHandler = item => {
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

  useEffect(() => {
    flatListRef.current.scrollToIndex({
      index: activeTab,
      animated: true,
      viewOffset: 60,
    });
  }, [activeTab]);

  return (
    <FlatList
      data={create ? filterButtonArray.slice(1) : filterButtonArray}
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
    />
  );
};

export default TabFilter;
