const STORAGE_KEY = 'COWS';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveCows = async (cows: Cow[]) =>
  AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(cows));

export const loadCows = async (): Promise<Cow[]> =>
  JSON.parse(await AsyncStorage.getItem(STORAGE_KEY) || '[]');
