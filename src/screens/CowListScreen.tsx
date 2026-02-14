import React, { useState } from 'react';
import { FlatList, View, Button, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useCows } from '../context/CowContext';
import CowItem from '../components/CowItem';
import SearchBar from '../components/SearchBar';
import FilterBar from '../components/FilterBar';
import CommonHeader from '../components/CommonHeader';
import EmptyState from '../components/EmptyState';
import { CowStatus } from '../models/Cow';

export default function CowListScreen({ navigation }: any) {
  const { cows } = useCows();

  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<CowStatus | ''>('');
  const [penFilter, setPenFilter] = useState('');

  const [showFilters, setShowFilters] = useState(false);

  const filtered = cows.filter(cow => {
    const matchSearch = cow.earTag
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchStatus = statusFilter
      ? cow.status === statusFilter
      : true;

    const matchPen = penFilter ? cow.pen === penFilter : true;

    return matchSearch && matchStatus && matchPen;
  });

  return (
    <View style={{ flex: 1, backgroundColor: '#fff', padding: 12 }}>
      <CommonHeader title="Cow List" showBack={false} />

      {cows.length > 0 && (
        <>
          <SearchBar value={search} onChange={setSearch} />

          {/* Filter Header */}
          <TouchableOpacity
            style={styles.filterHeader}
            onPress={() => setShowFilters(prev => !prev)}
          >
            <Text allowFontScaling={false} style={styles.filterHeaderText}>
              Filters
            </Text>
            <Text allowFontScaling={false} style={styles.arrow}>
              {showFilters ? '▲' : '▼'}
            </Text>
          </TouchableOpacity>

          {/* FilterBar collapsible */}
          {showFilters && (
            <FilterBar
              status={statusFilter}
              pen={penFilter}
              onStatusChange={setStatusFilter}
              onPenChange={setPenFilter}
            />
          )}
        </>
      )}

   {filtered.length >0 &&   <Button
        title="Add Cow"
        onPress={() => navigation.navigate('AddCow')}
      />
}
      <FlatList
        data={filtered}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <CowItem
            cow={item}
            onPress={() =>
              navigation.navigate('CowDetail', { cow: item })
            }
          />
        )}
        ListEmptyComponent={
          <EmptyState
            title={
              cows.length === 0
                ? 'No cows added yet'
                : 'No cows match your filters'
            }
            actionText="Add Cow"
            onAction={() => navigation.navigate('AddCow')}
          />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  filterHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#ccc',
    marginBottom: 8,
  },
  filterHeaderText: {
    fontWeight: '600',
    fontSize: 16,
  },
  arrow: {
    fontSize: 16,
  },
});
