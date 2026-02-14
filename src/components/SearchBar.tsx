import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

interface Props {
  value: string;
  onChange: (text: string) => void;
}

export default function SearchBar({ value, onChange }: Props) {
  return (
    <TextInput
    allowFontScaling={false}
      placeholder="Search by ear tag"
      value={value}
      onChangeText={onChange}
      style={styles.input}
      autoCapitalize="none"
    />
  );
}

const styles = StyleSheet.create({
  input: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    borderColor: '#ccc',
  },
});
