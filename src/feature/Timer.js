import React, { useState } from 'react';
import { useKeepAwake } from 'expo-keep-awake';
import { View, Text, StyleSheet, Dimensions, Vibration } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { colors } from '../utils/Colors';
import { Countdown } from '../components/countdown';
import { RoundedButton } from '../components/RoundedButton';
import { spacing } from '../utils/size';

const ONE_SECOND_IN_MS = 1000;
const PATTERN = [
  1 * ONE_SECOND_IN_MS,
  2 * ONE_SECOND_IN_MS,
  3 * ONE_SECOND_IN_MS,
  4 * ONE_SECOND_IN_MS,
  5 * ONE_SECOND_IN_MS,
  6 * ONE_SECOND_IN_MS,
];

const windowHeight = Dimensions.get('window').height;
const windowWight = Dimensions.get('window').wight;
export const Timer = ({ focusSubject, clearSubject, onTimerEnd }) => {
  useKeepAwake();
  const [isStarted, setISStarted] = useState(false);
  const [progress, setprogress] = useState(1);
  const [minutes, setMinutes] = useState(0.1);
  const [reset, setreset] = useState(false);

  const onEnd = (reset) => {
    Vibration.vibrate(PATTERN);
    setISStarted(false);
    setprogress(1);
    reset();
    onTimerEnd(focusSubject);
  };

  return (
    <View style={styles.container}>

      <View style={{ height: 42, paddingTop: 8, paddingLeft: 8 }}>
        <RoundedButton size={34} title="<-" onPress={clearSubject} />
      </View>
      
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={setprogress}
          onEnd={onEnd}
          onreset={reset}
        />
      </View>

      <View style={{ paddingLeft: 50, paddingRight: 50 }}>
        <ProgressBar
          progress={progress}
          color={colors.progressbar}
          style={{ height: spacing.sm }}
        />
      </View>

      <View style={{ height: windowHeight / 3, justifyContent: 'center' }}>
        <Text style={styles.title}>Focus on:</Text>
        <Text style={styles.task}>{focusSubject}</Text>
      </View>

      <View style={styles.buttonwrapper}>
        <View style={{ paddingLeft: 10 }}>
          <RoundedButton
            size={90}
            title="Reset"
            onPress={() => {
              setISStarted(false),
                setprogress(1),
                setreset(true);
            }}
          />
        </View>

        <View style={{ paddingLeft: 10 }}>
          {isStarted == true ? (
            <RoundedButton
              size={110}
              title="pause"
              onPress={() => setISStarted(false)}
            />
          ) : (
            <RoundedButton
              size={110}
              title="start"
              onPress={() => {setISStarted(true) ,setreset(false)}}
            />
          )}
        </View>
        <View
          style={{
            //height: windowHeight / 3,
            flexDirection: 'colum',
            justifyContent: 'center',
            paddingLeft: 10,
            paddingTop: 10,
          }}>
          <View>
            <RoundedButton
              size={50}
              title="10"
              onPress={() => {
                setMinutes(10);
              }}
            />
          </View>
          <View style={{ paddingTop: 5 }}>
            <RoundedButton
              size={50}
              title="15"
              onPress={() => {
                setMinutes(15);
              }}
            />
          </View>
          <View style={{ paddingTop: 5 }}>
            <RoundedButton
              size={50}
              title="20"
              onPress={() => {
                setMinutes(20);
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'colum',
  },
  countdown: {
    height: (windowHeight - 150) / 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonwrapper: {
    height: (windowHeight - 34) / 3,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fletx: 0.5,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.white,
  },
  task: {
    fletx: 0.5,
    textAlign: 'center',
    color: colors.white,
  },
});
