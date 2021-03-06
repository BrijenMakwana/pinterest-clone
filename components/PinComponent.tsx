import React, {useEffect, useState} from "react";
import {View, StyleSheet, Image, Text, Pressable} from "react-native";
import { Feather } from '@expo/vector-icons';
import {useNavigation} from "@react-navigation/native";

export type PinComponentProps = {
    pin:{
        id: string;
        image: string;
        title: string;
    }
}

const PinComponent = (props: PinComponentProps) => {
    const [ratio,setRatio] = useState(1);

    useEffect(()=>{
        //getting image aspect ratio
        Image.getSize(props.pin.image,(width,height)=>setRatio(width/height) );
    },[props.pin.image]);

    const navigation = useNavigation();

    const goToPinScreen = () => {
            navigation.navigate("Pin",{
                pinId: props.pin.id
            });
    }

    return <Pressable style={styles.container} onPress={goToPinScreen}>
        <View>
            {/* pin image */}
            <Image
                source={{
                    uri: props.pin.image
                }}
                style={[styles.image,{
                    aspectRatio: ratio
                }]}
            />
            {/* like button */}
            <Pressable style={styles.likeBtn}>
                <Feather name="heart" size={24} color="black" />
            </Pressable>
        </View>
        {/* title */}
        <Text style={styles.title} numberOfLines={2}>{props.pin.title}</Text>
    </Pressable>
}

export default PinComponent;

const styles = StyleSheet.create({
    container:{
        width: "100%",
        padding: 10
    },
    image:{
        width: "100%",
        borderRadius: 15
    },
    likeBtn:{
        backgroundColor: "lightgrey",
        height: 40,
        width: 40,
        padding: 5,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        position: "absolute",
        bottom: 10,
        right: 10
    },
    title:{
        margin: 10,
        fontSize: 16,
        fontWeight: "500"
    }
})