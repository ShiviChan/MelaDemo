import React from 'react';
import { StyleSheet, Text, View, ScrollView, StatusBar,Image,ImageBackground} from 'react-native';
export default class Segment3 extends React.Component
 {



    render()
    {
        return (

          <View style={styles.Container1}>

            <View style={styles.ContainerShadow1}>
                  <Image
                    source={require('../Images/drawable-hdpi/men.png')}
                    style={{width:162,height:232}}/>
                    <View style={{width:162,height:48,paddingTop:12,PaddingBottom:14,paddingLeft:55,paddingRight:55,backgroundColor:'white',borderRadius:20,borderColor:'white',borderWidth:2,shadowColor: "#000", shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.3, shadowRadius: 3.00, elevation:1,}}>
                        <Text style={{alignItems:'center',justifyContent:'center',color:'#040e35',fontSize:17, fontWeight: "bold"}}>Men</Text>
                    </View>
            </View >

            <View style={styles.ContainerShadow2}>
                  <Image
                    source={require('../Images/drawable-hdpi/women.png')}
                    style={{width:162,height:232}}/>
                    <View style={{width:162,height:48,paddingTop:12,PaddingBottom:14,paddingLeft:55,paddingRight:40,backgroundColor:'white',borderRadius:20,borderColor:'white',borderWidth:2,shadowColor: "#000", shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.3, shadowRadius: 3.00, elevation:1,}}>
                        <Text style={{alignItems:'center',justifyContent:'center',color:'#040e35',fontSize:17, fontWeight: "bold"}}>Women</Text>
                    </View>
            </View >

  </View>
        );
    }
}

const styles = StyleSheet.create({
  Container1: {
      height:300 ,
      width:'100%',
      paddingLeft:12,
      paddingRight:12,
      backgroundColor:'white',
      flexDirection:'row'
  },
  ContainerShadow1: {
      flex:1,
      height:280,
      justifyContent:'flex-start',
      alignItems:'center',
      marginRight:6,
      borderRadius:20,
      borderColor:'white',
      borderWidth:2,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2, },
      shadowOpacity: 0.3,
      shadowRadius: 3.00,
      elevation:1
  },
  ContainerShadow2: {

      flex:1,
      height:280,
      justifyContent:'flex-end',
      alignItems:'center',
      marginRight:6,
      borderRadius:20,
      borderColor:'white',
      borderWidth:2,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2, },
      shadowOpacity: 0.3,
      shadowRadius: 3.00,
      elevation:1
  }
});
