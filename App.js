import React from 'react';
import { StyleSheet, Text, View, ScrollView, StatusBar,Image,ImageBackground} from 'react-native';
import Header from "./components/Header";
import Segment1 from "./components/Segment1"
import Segment2 from "./components/Segment2"
import Segment3 from "./components/Segment3"
import Segment4 from "./components/Segment4"
import Segment5 from "./components/Segment5"
import Segment6 from "./components/Segment6"
export default class App extends React.Component
 {
    render()
    {
        return (
        <ScrollView style={styles.container}>
          <StatusBar
                  barStyle = "light-content"
                  hidden = {false}
                  backgroundColor = "#fff"
          />
            <Header/>
            <Segment1/>
            <Segment2/>
            <Segment3/>
            <Segment4/>
            <Segment5/>
            <View style={{height:100,paddingLeft:16}}>

                          <View style={{marginTop:'10%',height:'20%'}}>
                              <Text style={styles.TextBoldBlack}>COLLECTIONS TO CRUSH ON</Text>
                          </View>

                          <View style={{height:'15%'}}>
                              <Text style={styles.TextBoldWhite}>Shop our most loved brands!</Text>
                          </View>
            </View>

            <Segment6/>
       </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
  container: {
          flex:1,
          flexDirection:'column',
          height:'100%',
          width:'100%',
          backgroundColor:'white'
   },
   TextBoldBlack:
   {
     alignItems:'center',
     justifyContent:'center',
     color:'#040e35',
     fontSize:17,
     fontWeight: "bold",
   },
  TextBoldWhite: {
        alignItems:'center',
        justifyContent:'center',
        color:'#e5e5e5',
        fontSize:12,
        fontWeight: "bold",
    },
    

});
