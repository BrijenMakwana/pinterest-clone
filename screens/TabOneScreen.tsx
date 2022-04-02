import {FlatList, StyleSheet} from 'react-native';


import {  View } from '../components/Themed';
import PinComponent from "../components/PinComponent";
import {pins} from '../assets/data/pins'


export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <FlatList
          data={pins}
          renderItem={({item})=> <PinComponent pin={item}/>}
          keyExtractor={item=>item.id}
          numColumns={2}
          showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
