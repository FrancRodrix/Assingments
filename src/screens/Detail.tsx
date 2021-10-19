import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

export default function detailt(props: any) {
  const data = props.route.params.data;
  const Navigation = useNavigation();

  return (
    <SafeAreaView style={styles.mainContainer}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          Navigation.goBack();
        }}>
        <Text>Go BACK</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{data.item.title}</Text>
      <Text style={styles.title}>{data.item.author}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e67845',
  },
  title: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  url: {
    textAlign: 'center',
    fontSize: 10,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  created: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  author: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  button: {
    position: 'absolute',
    top: 70,
    left: 40,
  },
});
