import React from "react";
import { StyleSheet, View } from "react-native";
import { useAppDispatch, useAppSelector } from "../../../store";
import { InputLabel } from "../../InputLabel";
import { AppInput } from "../../AppInput";
import { CurrentPostActions } from "../../../store/features/currentPost";
import { Spacing } from "../../Spacing";
import { BORDER_LIGHT_GREY } from "../../../utils/colors";

export const DescriptionInput = () => {
    const dispatch = useAppDispatch();
    const currentPost = useAppSelector((state) => state.currentPost);

    const onDescriptionChange = (text: string) => {
        dispatch(CurrentPostActions.setDescription(text));
    }

    return (
        <View>
            <InputLabel text="Description" />

            <Spacing vertical={2.5} />

            <AppInput value={currentPost.text} onChangeText={onDescriptionChange} customStyles={styles.input} isTextArea/>
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        width: 320,
        borderColor: BORDER_LIGHT_GREY,
    },
});