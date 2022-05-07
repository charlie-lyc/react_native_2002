import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'


// const Header = (props) => {
const Header = ({ title }) => {
    return (
        <View style={ styles.header }>
            {/* <Text style={ styles.text }>Hello World</Text> */}
            {/* <Text style={ styles.text }>Shopping List</Text> */}
            {/* <Text style={ styles.text }>{ props.title }</Text> */}
            <Text style={ styles.text }>{ title }</Text>
        </View>
    )
}


Header.defaultProps = {
    title: 'Shopping List'
}

const styles = StyleSheet.create({
    header: {
        height: 60,
        padding: 15,
        backgroundColor: 'darkslateblue'
    },
    text: {
        color: '#fff', // 'white'
        fontSize: 23,
        textAlign: 'center'
    }
})

export default Header