import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface Props {
  title: string;
  showBack?: boolean;
}

export default function CommonHeader({ title, showBack = true }: Props) {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      {showBack ? (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text
            allowFontScaling={false}

            style={styles.back}>‹ Back</Text>
        </TouchableOpacity>
      ) : (
        <View style={{ width: 60 }} />
      )}

      <Text
        allowFontScaling={false}

        style={styles.title}>{title}</Text>
      <View style={{ width: 60 }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#fff',
  },
  back: {
    fontSize: 16,
    color: '#007AFF',
    minWidth: 60,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
  },
});
