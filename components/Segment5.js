import React from 'react';
import { StyleSheet, Text, View, ScrollView, StatusBar,Image,ImageBackground} from 'react-native';
export default class Segment5 extends React.Component
 {



    render()
    {
        return (

                  <View style={{heigh:260}}>

                              <View style={{height:110,backgroundColor:'#040e35',paddingLeft:16}}>
                                            <View style={{marginTop:'4%',height:'15%'}}>
                                                <Text style={styles.TextLightWhiteBlack}>FOR ALL GENDERS</Text>
                                            </View>

                                            <View style={{height:'15%'}}>
                                                <Text style={styles.TextBoldWhite}>Shop our most loved brands!</Text>
                                            </View>
                              </View>
                              <View style={styles.Container1} >
                                        <View style={styles.ContainerShadowFirst}>

                                            <Text style={styles.TextBoldWhite}>Skirts Under</Text>
                                            <View style={{marginTop:'5%'}}>
                                            <Text style={styles.TextLightWhiteBlack}>Rs 299</Text>
                                            </View>
                                        </View >
                                        <View style={styles.ContainerShadowSecond}>
                                                  <Text style={styles.TextBoldWhite}>Skirts Under</Text>
                                                  <View style={{marginTop:'5%'}}>
                                                  <Text style={styles.TextLightWhiteBlack}>Rs 1499</Text>
                                                  </View>
                                         </View>
                                        <View style={styles.ContainerShadowThird}>
                                                <Text style={styles.TextBoldWhite}>Skirts at</Text>
                                                <View style={{marginTop:'5%'}}>
                                                <Text style={styles.TextLightWhiteBlack}>50%off</Text>
                                                </View>
                                        </View>
                            </View>
                  </View>
        );
    }
}

const styles = StyleSheet.create({

   TextBoldBlack:
   {
     alignItems:'center',
     justifyContent:'center',
     color:'#040e35',
     fontSize:17,
     fontWeight: "bold",
   },
   TextBoldLttileBlack:
   {
     alignItems:'center',
     justifyContent:'center',
     color:'#040e35',
     fontSize:15,
     marginTop:'5%',
     fontWeight: "bold",
   },
   TextLightWhiteBlack:
   {
     alignItems:'center',
     justifyContent:'center',
     color:'#e5e5e5',
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
    Container1:
    {
      height:100,
      paddingLeft:12,
      marginTop:'-15%',
      flexDirection:'row',
      flexWrap: 'wrap',
      justifyContent:'space-between',

    },
    ContainerShadowFirst:
    {
      flex:1,
      paddingLeft:12,
      paddingRight:12,
      paddingTop:23,
      paddingBottom:23,
      alignItems:'center',
      justifyContent:'flex-start',
      backgroundColor:'#7ae0be',
      margin:6,
      height:100,
      borderRadius:20,
      borderColor:'white',
      borderWidth:2,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2, },
      shadowOpacity: 0.3,
      shadowRadius: 3.00,
      elevation:1
    },
    ContainerShadowSecond:
    {
        flex:1,
        paddingLeft:12,
        paddingRight:12,
        paddingTop:23,
        paddingBottom:23,
        alignItems:'center',
        justifyContent:'center',
        margin:6,
        height:100,
        borderRadius:20,
        backgroundColor:'#7ae0be',
        borderColor:'white',
        borderWidth:2,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2, },
        shadowOpacity: 0.3,
        shadowRadius: 3.00,
        elevation:1,
    },
    ContainerShadowThird:
    {
      flex:1,
      paddingLeft:12,
      paddingRight:12,
      paddingTop:23,
      paddingBottom:23,
      justifyContent:'flex-end',
      alignItems:'center',
      margin:6,
      height:100,
      borderRadius:20,
      borderColor:'white',
      backgroundColor:'#7ae0be',
      borderWidth:2,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2, },
      shadowOpacity: 0.3,
      shadowRadius: 3.00,
      elevation:1

    }

});
