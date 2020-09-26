import React from 'react'
import { StyleSheet, View } from 'react-native'

export const Block = (prop) => {
    const { flex, row, column, center, middle, right, space, style, children, ...props } = prop;
    const blockStyles = [
        styles.block,
        flex && { flex },
        flex === 'disabled' && { flex: 0 },
        center && styles.center,
        middle && styles.middle,
        right && styles.right,
        space && { justifyContent: `space-${space}` },
        row && styles.row,
        column && styles.column,
        style,
    ];

    return (
        <View style={blockStyles} {...props}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        // flex: 1,
    },
    row: {
        flexDirection: 'row'
    },
    column: {
        flexDirection: 'column'
    },
    center: {
        alignItems: 'center'
    },
    middle: {
        justifyContent: 'center'
    },
    right: {
        justifyContent: 'flex-end'
    },
});

