import React, {useState} from 'react';
import {Pressable, SafeAreaView, ScrollView, Text, View} from 'react-native';
import styles from './style';
import Header from '../../Components/Header';
import TabButton from '../../Components/TabButton';

const filterButtonArray: string[] = [
  'Все',
  'Ремонт',
  'Уборка',
  'Водитель',
  'Няня',
];

const HomeScreen = () => {
  const [activeItem, setActiveItem] = useState(0);

  const activeHandler = (item: string) => {
    if (item === 'Все') {
      setActiveItem(0);
    } else if (item === 'Ремонт') {
      setActiveItem(1);
    } else if (item === 'Уборка') {
      setActiveItem(2);
    } else if (item === 'Водитель') {
      setActiveItem(3);
    } else if (item === 'Няня') {
      setActiveItem(4);
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Header />
        <View style={styles.tabContainer}>
          <TabButton title="Объявления" active />
          <TabButton title="Специалисты" />
        </View>
        <Text style={styles.title}>Популярные</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {filterButtonArray.map((item, index) => {
            return (
              <Pressable
                style={styles.filterButton}
                onPress={() => activeHandler(item)}
                key={index}>
                <Text
                  style={
                    activeItem === index ? styles.textActive : styles.text
                  }>
                  {item}
                </Text>
              </Pressable>
            );
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
