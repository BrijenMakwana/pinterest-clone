import {Image, Pressable, StyleSheet} from 'react-native';

import { Text, View } from '../components/Themed';
import {pins} from "../assets/data/pins"
import {useEffect, useState} from "react";
import {useNavigation, useRoute} from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';

export default function PinScreen() {
    const [ratio,setRatio] = useState(1);

    const navigation = useNavigation();
    const route = useRoute();

    useEffect(()=>{
        //getting image aspect ratio
        Image.getSize(pins[route.params.pinId].image,(width,height)=>setRatio(width/height) );
    },[pins[route.params.pinId].image])

    const goBack = () => {
        navigation.goBack();
    }

    return (
        <View style={styles.container}>

            <Image
                source={{
                    uri: pins[route.params.pinId].image
                }}
                style={[styles.image,{
                    aspectRatio: ratio
                }]}
            />
            <Pressable style={styles.backBtn} onPress={goBack}>
                <Ionicons name="arrow-back-sharp" size={30} color="#fff" />
            </Pressable>
            <Text style={styles.title}>{pins[route.params.pinId].title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },
    backBtn:{
        position: "absolute",
        top: 50,
        left: 20,

    },
    image:{
        width: "100%"
    },
    title:{
        padding: 10,
        fontSize: 20,
        fontWeight: "600"
    }
});
