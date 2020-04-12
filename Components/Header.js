import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Colors from '../Constants/Colors'

const Header = (props) => {
    return (
       <View style={styles.header}>
           <Text style={styles.headerTitle}>{props.title}11</Text>
       </View>
    )
}


const styles = StyleSheet.create({
    header: {
        width: '100%', 
        height: 90, 
        padding: 36, 
        backgroundColor: Colors.primary,
        alignItems: 'center', 
        justifyContent: 'center'
    }, 
    headerTitle: {
        color: 'black', 
        fontSize: 18
    }
})

export default Header; 