import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import {justifyContent} from 'styled-system';

interface Props {}

const Detail = (props: Props) => {
  const Navigation = useNavigation();
  const Item = props.route.params.data;
  // console.log(Item, 'ffffff');

  return (
    <SafeAreaView style={styles.mainContainer}>
      <TouchableOpacity
        style={styles.back}
        onPress={() => {
          Navigation.goBack();
        }}>
        <Text>GO BACK</Text>
      </TouchableOpacity>
      <View style={styles.box}>
        <Text style={{textAlign: 'center'}}>{Item.name}</Text>
        <Text style={{textAlign: 'center'}}>{Item.name_limited}</Text>
        <Text style={{textAlign: 'center'}}>{Item.designation}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Detail;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fe4',
  },
  back: {
    position: 'absolute',
    top: 60,
    left: 30,
  },
  box: {
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 10,
    padding: 20,

    backgroundColor: '#fef',
  },
});
