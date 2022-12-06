import React from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacityProps,
    TouchableOpacity,
    Text,
} from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface ButtonProps extends TouchableOpacityProps {
    title: string;
}

export function StandardButton({ title, ...rest }: ButtonProps){
    return (
        <TouchableOpacity 
            style={ style.container }
            {...rest}
        >
            <Text style={ style.text }>
                { title }
            </Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: colors.green,
        height: 56,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },

    text: {
        fontSize: 22,
        color: colors.white,
        fontFamily: fonts.heading,
    },
});