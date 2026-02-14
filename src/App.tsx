import React from 'react';
import { CowProvider } from './context/CowContext';
import AppNavigator from './navigation/AppNavigator';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
    return (
        <CowProvider>
            <SafeAreaProvider>
                <SafeAreaView style={{ flex: 1,backgroundColor:'#919191' }} >
                    <AppNavigator />
                </SafeAreaView>
            </SafeAreaProvider>

        </CowProvider>
    );
}
