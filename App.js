import React, { useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    ScrollView,
    FlatList,
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
    const [goalsList, setGoalsList] = useState([]);
    const [isVisible, setIsVisible] = useState(false);

    const handleSubmit = (enteredGoal) => {
        setGoalsList((currentGoals) => [
            ...currentGoals,
            {
                id: Math.random().toString(),
                value: enteredGoal,
            },
        ]);
        setIsVisible(false);
    };

    const handleCancel = () => {
        setIsVisible(false)
    }

    const handleDelete = (goalId) => {
        setGoalsList((currentList) => {
            return currentList.filter((item) => item.id !== goalId);
        });
    };

    return (
        <View style={styles.rootArea}>
            <Button title="Add  New Goal" onPress={() => setIsVisible(true)} />
            <GoalInput handleCancel={handleCancel} isVisible={isVisible} onAddGoal={handleSubmit} />
            <FlatList
                keyExtractor={(item, index) => item.id}
                data={goalsList}
                renderItem={(itemData) => (
                    <GoalItem
                        id={itemData.item.id}
                        title={itemData.item.value}
                        onDelete={handleDelete}
                    />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    rootArea: {
        padding: 40,
    },
});
