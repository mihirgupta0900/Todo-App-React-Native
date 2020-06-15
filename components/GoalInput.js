import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = (props) => {
    const [goal, setGoal] = useState("");

    const handleChange = (text) => {
        setGoal(text);
    };

    const addGoalHandler = () => {
        props.onAddGoal(goal);
        setGoal("");
    };

    return (
        <Modal visible={props.isVisible} animationType="slide">
            <View style={styles.inputArea}>
                <TextInput
                    placeholder="TODO"
                    style={{
                        borderBottomColor: "black",
                        borderBottomWidth: 1,
                        margin: 5,
                        width: "50%",
                    }}
                    onChangeText={handleChange}
                    value={goal}
                />
                <View style={styles.buttonArea}>
                    <View style={styles.button}>
                        <Button
                            title="CANCEL"
                            color="red"
                            onPress={props.handleCancel}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button title="ADD" onPress={addGoalHandler} />
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputArea: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonArea: {
        marginTop: 10,
        flexDirection: "row",
        width: "60%",
        justifyContent: "space-around",
    },
    button: {
        width: "30%",
    },
});

export default GoalInput;
