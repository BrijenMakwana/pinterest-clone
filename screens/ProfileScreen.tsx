import {Image, Pressable, ScrollView, StyleSheet} from 'react-native';

import { Text, View } from '../components/Themed';
import { Entypo,MaterialCommunityIcons } from '@expo/vector-icons';
import MasonryLayout from "../components/MasonryLayout";
import {pins} from "../assets/data/pins";

export default function ProfileScreen() {
  return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.buttons}>
            <Pressable style={styles.btn}>
              <Entypo name="share" size={24} color="black" />
            </Pressable>
            <Pressable style={styles.btn}>
              <MaterialCommunityIcons name="dots-vertical" size={24} color="black" />
            </Pressable>

          </View>
          <Image
              source={{
                uri: "https://avatars.githubusercontent.com/u/96004700?v=4"
            }}
              style={styles.image}
          />
          <Text style={styles.title}>Brijen Makwana</Text>
          <Text style={styles.stats}>100 Followers | 80 Following</Text>
          <View style={styles.pinsContainer}>
            <MasonryLayout  pins={pins}/>
          </View>
        </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  buttons:{
    flexDirection: "row",
    padding: 10,
    alignSelf: "flex-end"
  },
  btn:{
    marginLeft: 10,
    padding: 5
  },
  image:{
    width: 200,
    height: 200,
    borderRadius: 100,
    marginTop: 5
  },
  title:{
    fontSize: 30,
    fontWeight: "600",
    marginTop: 20
  },
  stats:{
    marginTop: 10,
    fontSize: 16
  },
  pinsContainer:{
    width: "100%",
    marginTop: 10
  }
});
