import React from 'react';
import { StyleSheet, Text, View, ScrollView, StatusBar,Image,ImageBackground} from 'react-native';
export default class Segment4 extends React.Component
 {



    render()
    {
        return (
            <View style={{height:360}}>
                          <View style={{height:120,paddingLeft:16,backgroundColor:'#7ae0be'}}>
                                <View style={{marginTop:'4%',height:'15%'}}>
                                    <Text style={styles.TextBoldBlack}>SHOP BY TYPE</Text>
                                </View>

                                <View style={{height:'15%'}}>
                                    <Text style={styles.TextBoldWhite}>Shop our most loved brands!</Text>
                                </View>
                          </View>
                          <View style={{height:230,paddingLeft:44,paddingRight:44,marginTop:'-15%'}}>
                                      <View style={{height:88,flexDirection:'row',justifyContent:'center'}}>
                                                <View style={{width:88,height:88,flex:1,alignItems:'center',justifyContent:'flex-start',marginRight:'38%'}}>
                                                      <Image
                                                        source={require('../Images/drawable-hdpi/hoodie.png')}
                                                        style={{width:88,height:88,borderRadius:88/2,
                                                          borderWidth: 2,
                                                          borderColor:'#7ae0be'
                                                        }}/>
                                                </View>
                                                <View style={{width:88,height:88,flex:1,alignItems:'center',justifyContent:'flex-end'}}>
                                                    <Image
                                                      source={require('../Images/drawable-hdpi/woolen_hoodie.png')}
                                                      style={{width:88,height:88,borderRadius:88/2,
                                                        borderWidth: 2,
                                                        borderColor:'#7ae0be'
                                                      }}/>
                                                </View>
                                     </View>
                                      <View style={{height:20,flexDirection:'row',justifyContent:'center'}}>
                                             <View style={{width:88,height:20,flex:1,alignItems:'center',justifyContent:'flex-start',marginRight:'38%'}}>
                                                   <Text style={{alignItems:'center',
                                                   justifyContent:'center',
                                                   color:'#040e35',
                                                   fontSize:12,fontWeight: "bold"}}>Hoodie</Text>
                                             </View>
                                             <View style={{width:88,height:20,flex:1,alignItems:'center',justifyContent:'flex-end'}}>
                                                   <Text style={{alignItems:'center',
                                                   justifyContent:'center',
                                                   color:'#040e35',
                                                   fontSize:12,fontWeight: "bold"}}>Woolen Hoodie</Text>
                                             </View>
                                        </View>
                                        <View style={{height:88,flexDirection:'row',justifyContent:'center',marginTop:'10%'}}>
                                                     <View style={{width:88,height:88,flex:1,alignItems:'center',justifyContent:'flex-start',marginRight:'38%'}}>
                                                           <Image
                                                             source={require('../Images/drawable-hdpi/sweatshirt.png')}
                                                             style={{width:88,height:88,borderRadius:88/2,
                                                               borderWidth: 2,
                                                               borderColor:'#7ae0be'
                                                             }}/>
                                                     </View>
                                                     <View style={{width:88,height:88,flex:1,alignItems:'center',justifyContent:'flex-end'}}>
                                                         <Image
                                                           source={require('../Images/drawable-hdpi/round_neck.png')}
                                                           style={{width:88,height:88,borderRadius:88/2,
                                                             borderWidth: 2,
                                                             borderColor:'#7ae0be'
                                                           }}/>
                                                     </View>
                                          </View>
                                           <View style={{height:20,flexDirection:'row',justifyContent:'center'}}>
                                                  <View style={{width:88,height:20,flex:1,alignItems:'center',justifyContent:'flex-start',marginRight:'38%'}}>
                                                        <Text style={{alignItems:'center',
                                                        justifyContent:'center',
                                                        color:'#040e35',
                                                        fontSize:12,fontWeight: "bold"}}>Sweatshirt</Text>
                                                  </View>
                                                  <View style={{width:88,height:20,flex:1,alignItems:'center',justifyContent:'flex-end'}}>
                                                        <Text style={{alignItems:'center',
                                                        justifyContent:'center',
                                                        color:'#040e35',
                                                        fontSize:12,fontWeight: "bold"}}>Round neck</Text>
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
 TextBoldWhite: {
       alignItems:'center',
       justifyContent:'center',
       color:'#e5e5e5',
       fontSize:12,
       fontWeight: "bold",
   },

});
