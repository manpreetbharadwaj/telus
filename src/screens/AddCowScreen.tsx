import { useState } from 'react';
import {
  Alert,
  Button,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import CommonHeader from '../components/CommonHeader';
import { useCows } from '../context/CowContext';
import { CowStatus } from '../models/Cow';
import { uuid } from '../utils/helpers';

export default function AddCowScreen({ navigation }: any) {
  const { cows, addCow } = useCows();

  const [earTag, setEarTag] = useState('');
  const [sex, setSex] = useState<'Male' | 'Female' | ''>('');
  const [pen, setPen] = useState('');
  const [status, setStatus] = useState<CowStatus>('Active');
  const [weight, setWeight] = useState('');

  const validate = () => {
    if (!earTag.trim()) {
      Alert.alert('Validation', 'Ear tag is required');
      return false;
    }

    const exists = cows.some(c => c.earTag === earTag);
    if (exists) {
      Alert.alert('Validation', 'Ear tag must be unique');
      return false;
    }

    if (!sex) {
      Alert.alert('Validation', 'Sex is required');
      return false;
    }

    if (!pen.trim()) {
      Alert.alert('Validation', 'Pen is required');
      return false;
    }

    if (weight && Number(weight) <= 0) {
      Alert.alert('Validation', 'Weight must be positive');
      return false;
    }

    return true;
  };

  const save = () => {
    if (!validate()) return;

    addCow({
      id: uuid(),
      earTag,
      sex,
      pen,
      status,
      weight: weight ? Number(weight) : undefined,
      events: [],
      lastEventDate: new Date().toDateString(),
    });

    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <CommonHeader title="Add Cow" />

        {/* Ear Tag */}
        <TextInput
          allowFontScaling={false}
          placeholder="Ear Tag *"
          value={earTag}
          onChangeText={setEarTag}
          style={styles.input}
        />

        {/* Sex */}
        <View style={styles.row}>
          <Text allowFontScaling={false} style={styles.label}>
            Sex *
          </Text>
          <View style={{ flexDirection: 'row', gap: 8 }}>
            <TouchableOpacity onPress={() => setSex('Male')}>
              <Text
                allowFontScaling={false}
                style={[styles.option, sex === 'Male' && styles.selected]}
              >
                Male
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setSex('Female')}>
              <Text
                allowFontScaling={false}
                style={[styles.option, sex === 'Female' && styles.selected]}
              >
                Female
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Pen */}
        <TextInput
          allowFontScaling={false}
          placeholder="Pen * eg: A1, B2, C3."
          value={pen}
          onChangeText={setPen}
          style={styles.input}
        />

        {/* Status */}
        <View style={styles.row}>
          <Text allowFontScaling={false} style={styles.label}>
            Status *
          </Text>
          <View style={{ flexDirection: 'row', gap: 8, flexWrap: 'wrap' }}>
            {(['Active', 'In Treatment', 'Deceased'] as CowStatus[]).map(
              s => (
                <TouchableOpacity key={s} onPress={() => setStatus(s)}>
                  <Text
                    allowFontScaling={false}
                    style={[styles.option, status === s && styles.selected]}
                  >
                    {s}
                  </Text>
                </TouchableOpacity>
              ),
            )}
          </View>
        </View>

        {/* Weight */}
        <TextInput
          placeholder="Weight (optional)"
          value={weight}
          allowFontScaling={false}
          onChangeText={setWeight}
          keyboardType="numeric"
          style={styles.input}
        />

        <Button title="Save Cow" onPress={save} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 12,
  },
  row: {
    marginBottom: 12,
  },
  label: {
    marginBottom: 6,
    fontWeight: '600',
  },
  option: {
    paddingHorizontal: 2,
    paddingVertical: 6,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#ccc',
    color: '#000',
    minWidth : 100,
    textAlign: 'center',
    flexShrink: 1,
  },
  selected: {
    backgroundColor: '#007AFF',
    color: '#fff',
    borderColor: '#007AFF',
  },
});
