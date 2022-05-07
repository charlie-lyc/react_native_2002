import React, { useState } from 'react'
import { 
    View, 
    Text,
    StyleSheet,
    // Image,
    FlatList,
    Alert
} from 'react-native'
import uuid from 'react-native-uuid'
import Header from './components/Header'
import ListItem from './components/ListItem'
import AddItem from './components/AddItem'

/*************************************************/
/**
 * Basic Components
 */
// const App = () => {
//     return (
//         // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <View style={ styles.container }>
//             <Text style={ styles.text }>Hello World</Text>
//             <Image 
//                 source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }}
//                 style={ styles.img }
//             />
//         </View>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1, 
//         justifyContent: 'center', 
//         alignItems: 'center'
//     },
//     text: {
//         color: 'darkslateblue', 
//         fontSize: 30
//     },
//     img: {
//         width: 100,
//         height: 100,
//         borderRadius: 50 // NOT '50%'
//     }
// })

/*************************************************/
const App = () => {
    const [ items , setItems ] = useState([
        {
            id: uuid.v4(),
            text: 'Milk'
        }, {
            id: uuid.v4(),
            text: 'Eggs'
        }, {
            id: uuid.v4(),
            text: 'Bread'
        }, {
            id: uuid.v4(),
            text: 'Juice'
        }
    ])

    const deleteItem = id => {
        setItems(prevState => prevState.filter(item => item.id !== id) )
    }

    const addItem = text => {
        if (text === '') {
            Alert.alert('Error', 'Please enter an item', { text: 'OK' })
        } else {
            const newItem = {
                id: uuid.v4(),
                text
            }
            setItems(prevState => [ newItem, ...prevState ])
        }
    }

    return (
        <View style={ styles.container }>
            {/* <Header /> */}
            {/* <Header title='Shopping List' /> */}
            <Header />
            <AddItem addItem={ addItem } />
            <FlatList 
                data={ items }
                renderItem={ ({ item }) => <ListItem item={ item } deleteItem={ deleteItem } />}
                keyExtractor={ item => item.id }
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50
    }
})

/*************************************************/

export default App