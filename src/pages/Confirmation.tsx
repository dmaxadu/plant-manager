import React from "react";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { StandardButton } from "../components/StandardButton";
import colors from "../styles/colors";
import fonts from "../styles/fonts";

export function Confirmation(){
    return(
        <SafeAreaView style={ style.container }>
            <View style={ style.content }>
                <Text style={ style.emoji }>
                    😄
                </Text>
                <Text style={ style.title }>
                    Prontinho!
                </Text>
                <Text style={ style.subtitle }>
                    Agora vamos começar a cuidar das{'\n'}
                    suas plantinhas com muito cuidado!
                </Text>
                <View style={ style.footer }>
                    <StandardButton title="Começar"/>
                </View>
            </View>
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
    },

    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        padding: 30,
    },

    emoji: {
        textAlign: 'center',
        fontSize: 100,
    },

    title: {
        fontSize: 24,
        textAlign: 'center',
        fontFamily: fonts.heading,
        color: colors.heading,
        marginTop: 30,
        lineHeight: 38,
    },

    footer: {
        marginTop: 40,
        width: '100%',
        paddingHorizontal: 50,
    },

    subtitle: {
        fontFamily: fonts.text,
        textAlign: 'center',
        fontSize: 20,
        paddingTop: 20,
        color: colors.heading,
    },
})