import React, {useState} from 'react';
import {Pressable, ScrollView, Text} from 'react-native';
import styles from './style';

const filterButtonArray: string[] = [
  'Все',
  'Ремонт',
  'Уборка',
  'Водитель',
  'Няня',
];

const TabFilter = () => {
  const [activeItem, setActiveItem] = useState(0);

  const activeHandler = (item: string) => {
    filterButtonArray.forEach((i, idx) => {
      if (i === item) {
        setActiveItem(idx);
      }
    });
  };
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {filterButtonArray.map((item, index) => {
        return (
          <Pressable
            style={styles.filterButton}
            onPress={() => activeHandler(item)}
            key={index}>
            <Text
              style={activeItem === index ? styles.textActive : styles.text}>
              {item}
            </Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
};

export default TabFilter;
