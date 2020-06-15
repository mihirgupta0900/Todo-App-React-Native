import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, TouchableHighlight } from "react-native";

const GoalItem = (props) => {
    return (
        <TouchableOpacity onPress={() => props.onDelete(props.id)} >
            <View style={styles.listItem}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    listItem: {
        backgroundColor: "gray",
        borderColor: "black",
        padding: 10,
        borderWidth: 1,
        marginVertical: 5,
    },
});

export default GoalItem;
