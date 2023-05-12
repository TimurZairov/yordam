import React, {useState} from 'react';
import {FlatList, Pressable, Text} from 'react-native';
import styles from './style';

const filterButtonArray = ['Все', 'Ремонт', 'Уборка', 'Водитель', 'Няня'];

const TabFilter = () => {
  const [activeItem, setActiveItem] = useState(0);

  const activeHandler = item => {
    filterButtonArray.forEach((i, idx) => {
      if (i === item) {
        setActiveItem(idx);
      }
    });
  };

  return (
    <FlatList
      data={filterButtonArray}
      keyExtractor={(item, index) => item + index}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({item, index}) => {
        return (
          <Pressable
            style={styles.filterButton}
            onPress={() => activeHandler(item)}>
            <Text
              style={activeItem === index ? styles.textActive : styles.text}>
              {item}
            </Text>
          </Pressable>
        );
      }}
    />
  );
};

export default TabFilter;

// <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//   {filterButtonArray.map((item, index) => {
//     return (
//         <Pressable
//             style={styles.filterButton}
//             onPress={() => activeHandler(item)}
//             key={index}>
//           <Text
//               style={activeItem === index ? styles.textActive : styles.text}>
//             {item}
//           </Text>
//         </Pressable>
//     );
//   })}
// </ScrollView>
