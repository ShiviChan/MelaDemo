import React from 'react';
import { StyleSheet, Text, View, ScrollView, StatusBar,Image,ImageBackground} from 'react-native';
export default class Header extends React.Component
 {
    render()
    {
        return (
          <View style={styles.Header }>
                    <View style={{width:40,height:'100%',justifyContent: 'flex-start',backgroundColor:'blue',marginRight:16}}/>
                    <View style={{width:130,height:'100%',backgroundColor:'white',marginRight:110,padding:8}}>
                      <Text style={styles.white}>Sweatshirt Store </Text>
                    </View>
                    <View style={{width:40,height:'100%',justifyContent:'flex-end',backgroundColor:'#040e35'}}/>
          </View>

        );
      }
}

const styles = StyleSheet.create({
  Header: {
            height: 50,
            flexDirection: 'row',
            padding: 8
   },
  white: {
      // Define your HEX color code here.
      alignItems:'center',
      justifyContent:'center',
      color:'#040e35',
      fontSize:15,
      fontWeight: "bold"
    },
});
