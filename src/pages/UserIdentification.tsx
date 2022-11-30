import React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    TextInput,
} from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import { StandardButton } from '../components/StandardButton';

export function UserIdentification (){
    return (
        <SafeAreaView style={ style.container }>
            <View style={ style.wrapper }>
                <View style={ style.form }>
                    <Text style={ style.emoji }>
                        😄
                    </Text>
                    <Text style={ style.title }>
                        Como podemos {'\n'}
                        chamar você?
                    </Text>
                    <TextInput style={ style.input }>

                    </TextInput>
                    <StandardButton/>
                </View>
            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    wrapper: {
        flex: 1,
        width: '100%',
    },

    title: {
        fontSize: 24,
        textAlign: 'center',
        fontFamily: fonts.heading,
        color: colors.heading,
        marginTop: 20,
        lineHeight: 32,
    },

    form: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 54,
        alignItems: 'center',
    },

    emoji: {
        fontSize: 54,

    },

    input: {
        borderBottomWidth: 1,
        borderColor: colors.gray,
        color: colors.heading,
        width: '100%',
        fontSize: 18,
        marginTop: 50,
        padding: 10,
        textAlign: 'center',
    },
})