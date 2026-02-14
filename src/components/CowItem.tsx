import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { Cow } from '../models/Cow';
import StatusBadge from './StatusBadge';

export default function CowItem({
    cow,
    onPress,
}: {
    cow: Cow;
    onPress: () => void;
}) {
    return (
        <TouchableOpacity onPress={onPress} style={styles.card}>
            <View style={styles.left}>
                <Text
                    allowFontScaling={false} style={styles.tag}>Ear Tag: {cow.earTag}</Text>

                <Text
                    allowFontScaling={false} style={styles.meta}>
                    Sex: {cow.sex} • Pen: {cow.pen}
                </Text>

                <Text
                    allowFontScaling={false} style={styles.meta}>
                    Pen: {cow.pen}
                </Text>

                <Text
                    allowFontScaling={false} style={styles.meta}>
                    Weight: {cow.weight ? `${cow.weight} kg` : 'Weight N/A'}
                </Text>

                <Text
                    allowFontScaling={false} style={styles.date}>
                    Last Event: {cow.lastEventDate}
                </Text>
            </View>

            <StatusBadge status={cow.status} />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 12,
        marginVertical: 6,
        backgroundColor: '#fff',
        borderRadius: 8,
        elevation: 1,
    },
    left: {
        flex: 1,
        marginRight: 8,
    },
    tag: {
        fontSize: 16,
        fontWeight: '600',
    },
    meta: {
        fontSize: 14,
        color: '#555',
        marginTop: 2,
    },
    date: {
        fontSize: 12,
        color: '#888',
        marginTop: 4,
    },
});
