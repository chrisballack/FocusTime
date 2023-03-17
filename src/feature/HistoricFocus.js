import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors } from '../utils/Colors';
import { RoundedButton } from '../components/RoundedButton';
import { spacing, fontSizes } from '../utils/size';

export const HistoricFocus = ({historic}) => {
  
  if (!historic || !historic.length) return <Text style={styles.text}>Without Historics</Text>;

  const renderitem = ({ item }) => <Text style={styles.item}>{item}</Text>;

  return (
    <View>
      <Text style={styles.text}>Test Historic</Text>
      <FlatList data={historic} renderItem={renderitem} />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    color: colors.white,
    textAlign: 'center',
    fontSizes: fontSizes.sm,
  },
  text: {
    color: colors.white,
    textAlign: 'center',
    justifyContent: 'center',
    fontSizes: fontSizes.md,
    fontWeight: 'bold',
  },
});
