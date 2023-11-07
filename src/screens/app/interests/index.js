import React, {useEffect, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {WaveIndicator} from 'react-native-indicators';
import HeaderLogo from '~assets/images/appLogo2.png';
import CenterHeart from '~assets/images/heartSilver.png';
import {Button, ScreenWrapper} from '~components';
import BackArrowSvg from '~components/backArrowSvg';
import EmotionButtons from '~components/emotionButtons';
import HeartLeftSvg from '~components/heartLeftSvg';
import HeartRightSvg from '~components/heartRightSvg';
import ScreenNames from '~routes/routes';
import AppColors from '~utills/AppColors';
import {height} from '~utills/Dimension';
import styles from './styles';
import { useDispatch } from 'react-redux';
import { updateUser } from '~redux/slices/authSlice';
const creativityArray = [
  'Interés S',
  'Interés XL',
  'Interés S',
  'Interés XL',
  'Interés S',
  'Interés XL',
  'Interés S',
  'Interés XL',
  'Interés S',
  'Interés XL',
  'Interés S',
  'Interés XL',
  'Interés S',
  'Interés XL',
  'Interés S',
  'Interés XL',
];
const sportsArray = [
  'Interés S',
  'Interés XL',
  'Interés S',
  'Interés XL',
  'Interés S',
  'Interés XL',
  'Interés S',
];
const filmArray = [
  'Interés S',
  'Interés XL',
  'Interés S',
  'Interés XL',
  'Interés S',
  'Interés XL',
  'Interés S',
];
const salidasArray = [
  'Interés S',
  'Interés XL',
  'Interés S',
  'Interés XL',
  'Interés S',
  'Interés XL',
  'Interés S',
];

export default function Interests({navigation, route}) {
  const fromSignIn = route?.params?.fromSignIn || false;

  const [creativities, setCreativities] = useState(creativityArray);
  const [selectedCreativities, setSelectedCreativities] = useState([]);

  const [sports, setSports] = useState(sportsArray);
  const [selectedSports, setSelectedSports] = useState([]);

  const [film, setFilm] = useState(filmArray);
  const [selectedFilm, setSelectedFilms] = useState([]);

  const [salidas, setSalidas] = useState(salidasArray);
  const [selectedSalidas, setSelectedSalidas] = useState([]);

  const dispatch = useDispatch();

  const handleConfirmIntereset = () =>{
    dispatch(updateUser({
      interests : {
        sports: selectedSports,
        film: selectedFilm,
        creativity: selectedCreativities,
        alidas: selectedSalidas
      }
    }));
    navigation.navigate(ScreenNames.AddPhotosScreen);
  }
  return (
    <ScreenWrapper
      scrollEnabled
      statusBarColor={AppColors.bgWhite}
      backgroundColor={AppColors.bgWhite}
      headerUnScrollable={() => (
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.back}>
          <BackArrowSvg />
        </TouchableOpacity>
      )}>
      <View style={styles.mainViewContainer}>
        <HeartLeftSvg style={styles.leftHeart} />
        <HeartRightSvg style={styles.rightHeart} />
        <Text style={styles.title}>Select your interests</Text>
        <Text style={styles.subtitle}>
          Add your interests to your profile so everyone knows you like it,
          choose up to 5 options
        </Text>
        <Text style={styles.sectionTitle}>Creativity</Text>
        <View style={styles.row}>
          {creativities.map((item, index) => (
            <TouchableOpacity
              onPress={() => {
                const i = selectedCreativities.findIndex(
                  item => item === index,
                );
                if (i > -1) {
                  const tmp = [...selectedCreativities];
                  tmp.splice(i, 1);
                  setSelectedCreativities(tmp);
                } else {
                  setSelectedCreativities(prev => [...prev, index]);
                }
              }}
              key={`key-${index}`}
              style={styles.itemContainer(
                selectedCreativities.includes(index),
              )}>
              <Text style={styles.itemText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.line} />
        <Text style={styles.sectionTitle}>Sports</Text>
        <View style={styles.row}>
          {sports.map((item, index) => (
            <TouchableOpacity
              onPress={() => {
                const i = selectedSports.findIndex(item => item === index);
                if (i > -1) {
                  const tmp = [...selectedSports];
                  tmp.splice(i, 1);
                  setSelectedSports(tmp);
                } else {
                  setSelectedSports(prev => [...prev, index]);
                }
              }}
              key={`key-${index}`}
              style={styles.itemContainer(selectedSports.includes(index))}>
              <Text style={styles.itemText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.line} />
        <Text style={styles.sectionTitle}>Film and Television</Text>
        <View style={styles.row}>
          {film.map((item, index) => (
            <TouchableOpacity
              onPress={() => {
                const i = selectedFilm.findIndex(item => item === index);
                if (i > -1) {
                  const tmp = [...selectedFilm];
                  tmp.splice(i, 1);
                  setSelectedFilms(tmp);
                } else {
                  setSelectedFilms(prev => [...prev, index]);
                }
              }}
              key={`key-${index}`}
              style={styles.itemContainer(selectedFilm.includes(index))}>
              <Text style={styles.itemText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.line} />
        <Text style={styles.sectionTitle}>Salidas</Text>
        <View style={styles.row}>
          {salidas.map((item, index) => (
            <TouchableOpacity
              onPress={() => {
                const i = selectedSalidas.findIndex(item => item === index);
                if (i > -1) {
                  const tmp = [...selectedSalidas];
                  tmp.splice(i, 1);
                  setSelectedSalidas(tmp);
                } else {
                  setSelectedSalidas(prev => [...prev, index]);
                }
              }}
              key={`key-${index}`}
              style={styles.itemContainer(selectedSalidas.includes(index))}>
              <Text style={styles.itemText}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <Button
          onPress={
            fromSignIn
              ? () => handleConfirmIntereset()
              : () => {}
          }
          title={fromSignIn ? 'Continue' : 'Save'}
          containerStyle={styles.btn}
        />
      </View>
    </ScreenWrapper>
  );
}
