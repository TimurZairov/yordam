import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './style';
import {ArrowRightIcon} from '../../assets/icons/index';
import {colors} from '../../theme/colors';

const Card = () => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.info}>
        <View style={styles.userInfoContainer}>
          <Image
            source={require('../../assets/images/avatar.png')}
            style={styles.userInfoImage}
          />
          <View style={styles.userInfo}>
            <Text style={styles.userInfoText}>Матлюба Маматкулова</Text>
            <Text style={styles.userInfoText}>
              Дата: <Text style={styles.userText}>01.05.2023</Text>
            </Text>
            <Text style={styles.userInfoText}>
              Локация:{' '}
              <Text style={styles.userText}>Ташкент, Ул. Комил-Яшин 2</Text>
            </Text>
          </View>
        </View>
        <View style={styles.priceContainer}>
          <View style={styles.price}>
            <Text style={styles.priceTExt}>500 000</Text>
          </View>
          <Text style={styles.time}>19:47</Text>
        </View>
      </View>
      <Text style={styles.userJobTitle}>Уюорка Квартиры</Text>
      <Text numberOfLines={4}>
        Привет всем, необходимо убрать квартиру трехкомнатную, ищем порядочного
        специалиста, время по договоренности. От вас нужно уточнить время и день
        недели, квартира пустая к сожалению остаться не смогу, приму работу по
        приезду как закончите убирать...
      </Text>
      <View style={styles.userInfoFooter}>
        <Text style={styles.usersAgreed}>
          Откликнулись: <Text> 20 человек</Text>
        </Text>
        <ArrowRightIcon width={15} fill={colors.purpleColor} />
      </View>
    </View>
  );
};

export default Card;
