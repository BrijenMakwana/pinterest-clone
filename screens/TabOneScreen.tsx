import {ScrollView, StyleSheet} from 'react-native';


import {  View } from '../components/Themed';
import PinComponent from "../components/PinComponent";
import {pins} from '../assets/data/pins'


export default function TabOneScreen() {
  return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.columnOne}>
              {
                  pins.filter((_,index)=>index%2 === 0).map((item)=>(
                      <PinComponent pin={item} key={item.id}/>
                  ))
              }
          </View>
            <View style={styles.columnTwo}>
                {
                    pins.filter((_,index)=>index%2 === 1).map((item)=>(
                        <PinComponent pin={item} key={item.id}/>
                    ))
                }
            </View>
        </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#fff"
    },
    columnOne: {
        flex: 1,

    },
    columnTwo:{
        flex: 1,

    }
});
