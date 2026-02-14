import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CowListScreen from '../screens/CowListScreen';
import AddCowScreen from '../screens/AddCowScreen';
import CowDetailScreen from '../screens/CowDetailScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Cows" component={CowListScreen} />
        <Stack.Screen name="AddCow" component={AddCowScreen} />
        <Stack.Screen name="CowDetail" component={CowDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
