import React, { useState, useEffect } from 'react';
import {Button, Image, View, StyleSheet, TextInput} from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function CreatePinScreen() {
    const [image, setImage] = useState(null);
    const [ratio,setRatio] = useState(1);
    const [title,setTitle] = useState("");

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 1,
        });

        if (!result.cancelled) {
            //getting image aspect ratio
            Image.getSize(result.uri,(width,height)=>setRatio(width/height) );
            setImage(result.uri);
        }
    };

    const onSubmit = () => {
    //    save to database
    }

    return (
        <View style={styles.container}>
            {image && <Image source={{ uri: image }} style={[styles.image,{
                aspectRatio: ratio
            }]} />}
            <Button title="Pick an Image" onPress={pickImage} />
            <TextInput
                placeholder="Enter text here"
                value={title}
                onChangeText={setTitle}
                onSubmitEditing={onSubmit}
                style={styles.input}
            />
        </View>
    );
}

const styles= StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#fff"
    },
    image:{
        width: "50%",
        borderRadius: 15,
        marginBottom: 20
    },
    input:{
        backgroundColor: "lightgrey",
        padding: 10,
        width: "80%",
        marginTop: 20
    }
})