import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

interface Props {
  title?: string;
  actionText?: string;
  onAction?: () => void;
}

export default function EmptyState({
  title = 'No cows found',
  actionText = 'Add Cow',
  onAction,
}: Props) {
  return (
    <View style={styles.container}>
      <Text
allowFontScaling={false} style={styles.text}>{title}</Text>

      {onAction && (
        <Button title={actionText} onPress={onAction} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  text: {
    fontSize: 16,
    marginBottom: 12,
    color: '#666',
  },
});
