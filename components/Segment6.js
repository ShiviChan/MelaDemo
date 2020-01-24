import React from 'react';
import { StyleSheet, Text, View, ScrollView, StatusBar,Image,ImageBackground} from 'react-native';
export default class Segment6 extends React.Component
 {
    render()
    {
        return (
          <View style={{height:610,width:'100%'}}>

                  <View style={styles.container2}>
                            <View style={styles.ContainerImageShadow1}>
                                  <Image
                                    source={require('../Images/drawable-hdpi/sweatshirt.png')}
                                    style={{width:162,height:232}}/>
                                    <View style={{width:162,height:100,marginTop:'-36%',paddingTop:12,PaddingBottom:14,paddingLeft:16,paddingRight:16,backgroundColor:'white',borderRadius:20,borderColor:'white',borderWidth:2,shadowColor: "#000", shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.3, shadowRadius: 3.00, elevation:1,}}>
                                        <Text style={{alignItems:'center',justifyContent:'center',color:'#040e35',fontSize:14, fontWeight: "bold"}}>Rayon Slub Navy Blue Designer Toys</Text>
                                        <Text style={styles.TextBoldLttileBlack}>Rs 1299</Text>
                                    </View>
                            </View >

                            <View style={styles.ContainerImageShadow2}>
                                        <Image
                                          source={require('../Images/drawable-hdpi/sweatshirt.png')}
                                          style={{width:162,height:232}}/>
                                          <View style={{width:162,height:100,marginTop:'-36%',paddingTop:12,PaddingBottom:14,paddingLeft:16,paddingRight:16,backgroundColor:'white',borderRadius:20,borderColor:'white',borderWidth:2,shadowColor: "#000", shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.3, shadowRadius: 3.00, elevation:1,}}>
                                              <Text style={{alignItems:'center',justifyContent:'center',color:'#040e35',fontSize:14, fontWeight: "bold"}}>Rayon Slub Navy Blue Designer Toys</Text>
                                              <Text style={styles.TextBoldLttileBlack}>Rs 1299</Text>
                                          </View>
                            </View>
                  </View>
                  <View style={styles.container2}>
                        <View style={styles.ContainerImageShadow1}>
                              <Image
                                source={require('../Images/drawable-hdpi/sweatshirt.png')}
                                style={{width:162,height:232}}/>
                                <View style={{width:162,height:100,marginTop:'-36%',paddingTop:12,PaddingBottom:14,paddingLeft:16,paddingRight:16,backgroundColor:'white',borderRadius:20,borderColor:'white',borderWidth:2,shadowColor: "#000", shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.3, shadowRadius: 3.00, elevation:1,}}>
                                    <Text style={{alignItems:'center',justifyContent:'center',color:'#040e35',fontSize:14, fontWeight: "bold"}}>Rayon Slub Navy Blue Designer Toys</Text>
                                    <Text style={styles.TextBoldLttileBlack}>Rs 1299</Text>
                                </View>
                        </View >
                        <View style={styles.ContainerImageShadow2}>
                              <Image
                                source={require('../Images/drawable-hdpi/sweatshirt.png')}
                                style={{width:162,height:232}}/>
                                <View style={{width:162,height:100,marginTop:'-36%',paddingTop:12,PaddingBottom:14,paddingLeft:16,paddingRight:16,backgroundColor:'white',borderRadius:20,borderColor:'white',borderWidth:2,shadowColor: "#000", shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.3, shadowRadius: 3.00, elevation:1,}}>
                                    <Text style={{alignItems:'center',justifyContent:'center',color:'#040e35',fontSize:14, fontWeight: "bold"}}>Rayon Slub Navy Blue Designer Toys</Text>
                                    <Text style={styles.TextBoldLttileBlack}>Rs 1299</Text>
                                </View>

                          </View>
                  </View>
          </View>
        );
    }
}

const styles = StyleSheet.create({
  container2: {
        height:300,
        paddingLeft:12,
        paddingRight:12,
        flexDirection:'row'
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

    ContainerImageShadow1: {
        flex:1,
        height:280,
        justifyContent:'flex-start',
        alignItems:'center',
        marginRight:'7%',
        borderRadius:20,
        borderColor:'white',
        borderWidth:2,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2, },
        shadowOpacity: 0.3,
        shadowRadius: 3.00,
        elevation:1
    },
    ContainerImageShadow2: {

        flex:1,
        height:280,
        justifyContent:'flex-end',
        alignItems:'center',
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
