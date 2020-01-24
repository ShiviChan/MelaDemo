import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView,ImageBackground} from 'react-native';
export default class Segment2 extends React.Component
 {
    render()
    {
      return (

        <View style={styles.HeaderPadding}>

            <View style={{marginTop:'8%',height:'5%'}}>
                <Text style={styles.TextBoldBlack}>BRANDS TO CRUSH ON</Text>
            </View>

            <View style={{height:'5%'}}>
                <Text style={styles.TextBoldWhite}>Shop our most loved brands!</Text>
            </View>

            <View style={styles.Container1} >
                        <View style={styles.ContainerShadowFirst}>
                              <Image
                                  source={require('../Images/drawable-hdpi/tommy_hilfiger.png')}
                                  style={{height:55,width:74,margin:13}}/>
                        </View >
                        <View style={styles.ContainerShadowSecond}>
                              <Image
                                source={require('../Images/drawable-hdpi/nike.png')}
                                style={{height:44,width:83,margin:13}}/>
                         </View>
                        <View style={styles.ContainerShadowThird}>
                            <Image
                              source={require('../Images/drawable-hdpi/american_eagle.png')}
                              style={{height:47,width:84,margin:13}}/>
                        </View>
            </View>

            <View style={styles.Container2} >

                        <View style={{flex:1,justifyContent:'flex-start',alignItems:'center',height:'100%',margin:2}}>
                              <Text style={{alignItems:'center',justifyContent:'center',color:'#040e35',fontSize:10,margin:2}}>Tommy Hilfiger</Text>
                        </View >

                        <View style={{flex:1,alignItems:'center',justifyContent:'center',height:'100%',margin:2}}>
                              <Text style={{alignItems:'center',justifyContent:'center',color:'#040e35',fontSize:10,margin:2}}>Nike</Text>
                        </View>

                        <View style={{flex:1,justifyContent:'flex-end',alignItems:'center',height:'100%',margin:2}}>
                              <Text style={{alignItems:'center',justifyContent:'center',color:'#040e35',fontSize:10,margin:2}}>American Eagle</Text>
                        </View>
            </View>
            <View style={styles.Container3} >
                        <View style={{flex:1,justifyContent:'flex-start',alignItems:'center',height:'100%',margin:1}}>
                            <View style={{width:'40%',height:'100%',backgroundColor:'#7ae0be',alignItems:'center'}}>
                                <Text style={{alignItems:'center',justifyContent:'center',color:'#fff',fontSize:8}}>First Copy</Text>
                            </View>
                        </View >

                        <View style={{flex:1,alignItems:'center',justifyContent:'center',height:'100%',margin:1}}>
                            <View style={{width:'40%',height:'100%',backgroundColor:'#7ae0be',alignItems:'center'}}>
                                <Text style={{alignItems:'center',justifyContent:'center',color:'#fff',fontSize:8}}>First Copy</Text>
                            </View>
                         </View>

                        <View style={{flex:1,justifyContent:'flex-end',alignItems:'center',height:'100%',margin:1}}>
                              <View style={{width:'40%',height:'100%',backgroundColor:'#7ae0be',alignItems:'center'}}>
                                  <Text style={{alignItems:'center',justifyContent:'center',color:'#fff',fontSize:8}}>First Copy</Text>
                              </View>
                        </View>
            </View>


            <View style={styles.Container1} >

                        <View style={styles.ContainerShadowFirst}>
                              <Image
                                source={require('../Images/drawable-hdpi/adidas.png')}
                                style={{height:56,width:83,margin:13}}/>
                        </View >

                        <View style={styles.ContainerShadowSecond}>

                              <Image
                                source={require('../Images/drawable-hdpi/puma.png')}
                                style={{height:40,width:80,margin:13}}/>

                         </View>

                        <View style={styles.ContainerShadowThird}>
                            <Image
                              source={require('../Images/drawable-hdpi/zara.png')}
                              style={{height:11,width:80,margin:13}}/>
                        </View>
            </View>

            <View style={styles.Container2} >
                        <View style={{flex:1,justifyContent:'flex-start',alignItems:'center',height:'100%',margin:2}}>
                              <Text style={{alignItems:'center',justifyContent:'center',color:'#040e35',fontSize:10,margin:2}}>Addidas</Text>
                        </View >

                        <View style={{flex:1,alignItems:'center',justifyContent:'center',height:'100%',margin:2}}>
                              <Text style={{alignItems:'center',justifyContent:'center',color:'#040e35',fontSize:10,margin:2}}>Puma</Text>
                        </View>

                        <View style={{flex:1,justifyContent:'flex-end',alignItems:'center',height:'100%',margin:2}}>
                              <Text style={{alignItems:'center',justifyContent:'center',color:'#040e35',fontSize:10,margin:2}}>Zara</Text>
                        </View>
            </View>

            <View style={{height:10,width:'100%',marginTop:'1%',flexDirection:'row',flexWrap: 'wrap',justifyContent:'space-between'}} >

                        <View style={{flex:1,justifyContent:'flex-start',alignItems:'center',height:'100%',margin:1}}>
                            <View style={{width:'40%',height:'100%',backgroundColor:'#7ae0be',alignItems:'center'}}>
                                  <Text style={{alignItems:'center',justifyContent:'center',color:'#fff',fontSize:8}}>First Copy</Text>
                            </View>
                        </View >

                        <View style={{flex:1,alignItems:'center',justifyContent:'center',height:'100%',margin:1}}>
                            <View style={{width:'40%',height:'100%',backgroundColor:'#7ae0be',alignItems:'center'}}>
                                <Text style={{alignItems:'center',justifyContent:'center',color:'#fff',fontSize:8}}>First Copy</Text>
                        </View>

                         </View>

                        <View style={{flex:1,justifyContent:'flex-end',alignItems:'center',height:'100%',margin:1}}>
                            <View style={{width:'40%',height:'100%',backgroundColor:'#7ae0be',alignItems:'center'}}>
                                  <Text style={{alignItems:'center',justifyContent:'center',color:'#fff',fontSize:8}}>First Copy</Text>
                        </View>
                </View>
            </View>

            <View style={{marginTop:'5%',height:'5%'}}>
                <Text style={{alignItems:'center',justifyContent:'center',color:'#040e35',fontSize:17, fontWeight: "bold"}}>FOR ALL GENDERS</Text>
            </View>

            <View style={{height:'5%'}}>
                <Text style={{alignItems:'center',justifyContent:'center',color:'#e5e5e5',fontSize:12, fontWeight: "bold"}}>Shop our most loved brands!</Text>
            </View>
        </View>
      );
    }
}


const styles = StyleSheet.create({
  HeaderPadding: {
        height:380,
        width:'100%',
        paddingLeft:16,
        paddingRight:16,
        backgroundColor:'white',
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
    Container1:
    {
      height:88,
      width:'100%',
      marginTop:'4%',
      flexDirection:'row',
      flexWrap: 'wrap',
      justifyContent:'space-between',

    },
    ContainerShadowFirst:
    {
      flex:1,
      alignItems:'center',
      justifyContent:'flex-start',
      margin:6,
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
        alignItems:'center',
        justifyContent:'center',
        margin:6,
        borderRadius:20,
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
      justifyContent:'flex-end',
      alignItems:'center',
      margin:6,
      borderRadius:20,
      borderColor:'white',
      borderWidth:2,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2, },
      shadowOpacity: 0.3,
      shadowRadius: 3.00,
      elevation:1

    },
    Container2:{
      height:15,
      width:'100%',
      flexDirection:'row',
      flexWrap: 'wrap',
      justifyContent:'space-between'
    },
    Container3:
    {
      height:10,
      width:'100%',
      marginTop:'1%',
      flexDirection:'row',
      flexWrap: 'wrap',
      justifyContent:'space-between'

    }
});
