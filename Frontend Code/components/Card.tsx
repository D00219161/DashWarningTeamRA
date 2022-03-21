import React from "react";
import {StyleSheet, View} from "react-native";

export default function Card(props: { children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }){
    return(
        <View style={StyleSheet.card}>
            <View style={StyleSheet.cardContent}>
                {props.children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {

    },
    cardContent: {

    },
})