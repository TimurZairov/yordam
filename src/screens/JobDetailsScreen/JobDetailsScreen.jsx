import React from 'react';
import styles from './style';
import {ActivityIndicator, Text, View} from 'react-native';
import Header from '../../Components/Header';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {useNavigation, useRoute} from '@react-navigation/native';
import {useQuery} from '@apollo/client';
import {getPost} from './queries';
import {colors, mapStyle} from '../../theme/colors';
import ErrorScreen from '../ErrorScreen';
import Button from '../../Components/Button';

const JobDetailsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {id} = route.params;
  // Get Post details
  const {data: post, loading, error} = useQuery(getPost, {variables: {id}});
  const jobDetails = post?.getPost || {};
  if (loading) {
    return <ActivityIndicator color={colors.purpleColor} />;
  }

  if (error) {
    return <ErrorScreen error={error.message} />;
  }

  const applyJobHandler = () => {
    navigation.navigate('Applied', {id});
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Header />
      </View>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        showsMyLocationButton={true}
        initialRegion={{
          latitude: +jobDetails?.lat,
          longitude: +jobDetails?.long,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        customMapStyle={mapStyle}>
        <Marker
          coordinate={{
            latitude: jobDetails?.lat ? +jobDetails?.lat : 0,
            longitude: jobDetails?.long ? +jobDetails?.long : 0,
          }}
          anchor={{x: 0.5, y: 0.5}}
        />
      </MapView>
      {id ? (
        <View style={styles.jobInfoContainer}>
          <View style={styles.jobInfo}>
            <Text style={styles.jobUserName}>{jobDetails.User?.name}</Text>
            <Text style={styles.title}>{jobDetails.title}</Text>
            <Text style={styles.title}>{jobDetails.description}</Text>
            <Button title={'Откликнуться'} onPress={applyJobHandler} />
          </View>
        </View>
      ) : null}
    </View>
  );
};

export default JobDetailsScreen;
