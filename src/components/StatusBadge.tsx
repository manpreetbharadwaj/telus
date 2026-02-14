import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { CowStatus } from '../models/Cow';

export default function StatusBadge({ status }: { status: CowStatus }) {
  return (
    <View style={[styles.badge, styles[status]]}>
      <Text allowFontScaling={false} style={styles.text}>
        {status}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    minWidth: 100,   
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
    flexShrink: 1,
    minWidth: 80,
  },
  Active: { backgroundColor: 'green' },
  'In Treatment': { backgroundColor: 'orange' },
  Deceased: { backgroundColor: 'red' },
});
