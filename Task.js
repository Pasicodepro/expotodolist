import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Task = (props) =>{

    return(

        <View style={styles.item}>
            <View style={styles.itemLeft}>

                <View style={styles.aquare}></View>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.circular}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item:{
        backgroundColor:'white',
        padding:15,
        borderRadius:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:20
    },
    itemLeft:{
        flexDirection:'row',
        alignItems:'center',
        flexWrap:'wrap'
    },
    aquare:{
        width:24,
        height:24,
        backgroundColor:'#55bcf6',
        opacity:0.4,
        borderRadius:5,
        marginRight:14
    },
    itemText:{
        maxWidth:'80%',
    },
    circular:{
        width:12,
        height:12,
        borderColor:'#55bcf6',
        borderWidth:2,
        borderRadius:5,
    },
  });
export default Task