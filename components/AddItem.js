import React, { useState } from 'react'
import {
    View, 
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome'


const AddItem = ({ addItem }) => {
    const [ text, setText ] = useState('')

    const handleChangeText = (textValue) => {
        setText(textValue)
    }

    const handlePress = () => {
        addItem(text)
        setText('')
    }

    return (
        <View>
            <TextInput 
                style={ styles.input }
                placeholder='Write An Item...'
                onChangeText={ handleChangeText }
                value={ text }
            />
            <TouchableOpacity style={ styles.btn } onPress={ handlePress }>
                <Text style={ styles.btnText }>
                    <Icon name='plus' size={20} />
                    &nbsp;Add Item
                </Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    input: {
        height: 60,
        padding: 8,
        fontSize: 16
    },
    btn: {
        backgroundColor: '#c2bad8',
        padding: 9,
        margin: 5
    },
    btnText: {
        color: 'darkslateblue',
        fontSize: 20,
        textAlign: 'center'
    }

})

export default AddItem