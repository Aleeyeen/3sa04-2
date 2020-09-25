import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, FlatList, TouchableHighlight,StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
]

const ZipItem = ({ place, code, navigation }) => (
    <TouchableHighlight onPress={() => navigation.navigate('Weather', { zipCode: code })}>
        <View>
            <ImageBackground source={require('../weather.jpg')} style={styles.backdrop}>
            <Text style={styles.Font}>{place}</Text>
            <Text style={styles.Font}>{code}</Text>
            </ImageBackground>
        </View>
    </TouchableHighlight>
)

const _keyExtractor = item => item.code

export default function ZipCodeScreen() {
    const navigation = useNavigation()
    return (
        <View>
            <FlatList
                data={availableZipItems}
                keyExtractor={_keyExtractor}
                renderItem={({ item }) => <ZipItem {...item} navigation={navigation} />}
            />
            <StatusBar style="auto" />
        </View>
    );

}
const styles = StyleSheet.create({
    Font: {
       color: 'red',
       fontSize: 40,
       alignItems: 'center'
    },
   backdrop: {
    alignItems: 'center',
   } 
});