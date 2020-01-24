import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView,ImageBackground} from 'react-native';
export default class Segment1 extends React.Component
 {
    render()
    {
        return (
          <View style={{height:360}}>
            <ImageBackground
            source={require('../Images/drawable-hdpi/bg_6.png')}
            style={{height: 360}}>

              <View style={styles.Style1}>
                    <Text style={styles.TextStyle}>New Collection</Text>
                    <View style={{height:100,width:100, marginLeft:'78%',marginTop:'110%'}}>

                          <View style={{height:15,marginLeft:'3%'}}>
                              <Text style={styles.white}   >SAVE UPTO</Text>
                            </View>
                            <View style={{height:40,width:90,flexDirection:'row'}}>
                                  <View style={{flex: 1,justifyContent: 'center',alignItems:'center'}}>
                                      <Text style={styles.white1}>45%</Text>
                                  </View>
                                  <View style={{flex: 0.5,justifyContent: 'center',marginTop:'5%'}}>
                                        <Text style={styles.white2}>OFF</Text>
                                  </View>
                          </View>

                    </View>
              </View>

              <ImageBackground
                    source={require('../Images/drawable-hdpi/sweatshirt_2.png')}
                    style={styles.ImageBackgroundStyle}>
              </ImageBackground>
            </ImageBackground>
          </View>



        );
    }
}


const styles = StyleSheet.create({

  TextStyle:{
    width:155,
    color:'#040e35',
    fontSize:30

  },

  Style1:{
    height: 55,
    marginTop: '5%',
    paddingLeft: '30%',
     paddingRight:'24%'
  },
  ImageBackgroundStyle: {
        height: 194,
        width:194,
        marginLeft:'5%',
        marginTop:'12%'
   },
  white: {

      color: '#e5e5e5',
      fontSize:16,
      backgroundColor: 'transparent'
    },
    white1: {

        color: '#ffffff',
        fontSize:25,
        backgroundColor: 'transparent'
      },
    white2: {
      color: '#e5e5e5',
      fontSize:16,
      backgroundColor: 'transparent'

    }



});
