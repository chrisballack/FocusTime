import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors } from '../utils/Colors';
import { RoundedButton } from '../components/RoundedButton';
import { spacing } from '../utils/size';
import { HistoricFocus } from './HistoricFocus';

export const Focus = ( { addSubject , historic } ) => {

  const [subject, setSubject] = useState(null);
  
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={setSubject}
          label="What would you like to focus on?"
        />
        <View style={styles.button}>
          <RoundedButton 
          title="+" 
          size={spacing.xl} 
          onPress={() => {
            addSubject(subject);
            }} 
            />
        </View>
        
      </View>

      <HistoricFocus historic={historic}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button: {
    justifyContent: 'center',
  },
  textInput: {
    flex: 1,
    marginRight: spacing.sm,
  },
  inputContainer: {
    padding: spacing.xl,
    justifyContent: 'top',
    flexDirection: 'row',
  },
});
