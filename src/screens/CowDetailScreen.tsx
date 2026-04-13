import { Text, View } from 'react-native';
import CommonHeader from '../components/CommonHeader';

export default function CowDetailScreen({ route }: any) {
    const { cow } = route.params;

    return (
        <View style={{ padding: 12, backgroundColor: '#ffffff', flex: 1 }}>
            <CommonHeader title="Cow Details" />
            <Text
                allowFontScaling={false}>Tag: {cow.earTag}</Text>
            <Text
                allowFontScaling={false}>Sex: {cow.sex}</Text>
            <Text
                allowFontScaling={false}>Pen: {cow.pen}</Text>
                <Text
                allowFontScaling={false}>Weight: {cow.weight ? `${cow.weight} kg` : 'Weight N/A'}</Text>
            <Text
                allowFontScaling={false}>Status: {cow.status}</Text>
        </View>
    );
}
