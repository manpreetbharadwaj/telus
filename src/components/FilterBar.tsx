import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { CowStatus } from '../models/Cow';

interface Props {
    status: CowStatus | '';
    pen: string;
    onStatusChange: (s: CowStatus | '') => void;
    onPenChange: (p: string) => void;
}

export default function FilterBar({
    status,
    pen,
    onStatusChange,
    onPenChange,
}: Props) {
    const statuses: (CowStatus | 'All')[] = [
        'All',
        'Active',
        'In Treatment',
        'Deceased',
    ];

    return (
        <View style={styles.container}>
            {/* Status filter */}
            <Text
                allowFontScaling={false} style={styles.label}>Status</Text>
            <View style={styles.row}>
                {statuses.map(s => {
                    const value = s === 'All' ? '' : s;
                    return (
                        <TouchableOpacity
                            key={s}
                            onPress={() => onStatusChange(value as CowStatus | '')}
                        >
                            <Text
                                allowFontScaling={false} style={[styles.option, status === value && styles.selected]}>
                                {s}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </View>

            {/* Pen filter */}
            <Text
                allowFontScaling={false} style={styles.label}>Pen</Text>
            <View style={styles.row}>
                {['All', 'A1', 'B2', 'C3'].map(p => {
                    const value = p === 'All' ? '' : p;
                    return (
                        <TouchableOpacity key={p} onPress={() => onPenChange(value)}>
                            <Text
                                allowFontScaling={false} style={[styles.option, pen === value && styles.selected]}>
                                {p}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 12,
    },
    label: {
        fontWeight: '600',
        marginBottom: 4,
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 8,
    },
    option: {
        paddingHorizontal: 4,
        paddingVertical: 6,
        borderWidth: 1,
        borderRadius: 16,
        marginRight: 8,
        marginBottom: 6,
        borderColor: '#ccc',

        minWidth: 100,
        textAlign: 'center',
        flexShrink: 1,
    }

    ,
    selected: {
        backgroundColor: '#007AFF',
        color: '#fff',
        borderColor: '#007AFF',
    },
});
