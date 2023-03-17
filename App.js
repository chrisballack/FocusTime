import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import Constants from 'expo-constants';
import { colors } from './src/utils/Colors';
import { Focus } from './src/feature/focus';
import { Timer } from './src/feature/Timer';


export default function App() {
  const [currentSubject, setCurrentSubject] = useState(null);
  const [hictoric, sethictoric] = useState([]);

  return (
    
    <SafeAreaView style={styles.container}>
    
    
      {!currentSubject ? (
        <Focus 
        
        addSubject={(subject) => setCurrentSubject(subject)}
         historic = {hictoric}

         />
      ) : (
         <Timer 
          focusSubject={currentSubject}
          onTimerEnd={(subject) => {sethictoric([...hictoric,subject])}}
          clearSubject={() => setCurrentSubject(null)}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkBlue,
  },
  text: {
    color: colors.white
  },
});
