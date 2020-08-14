import React, { useEffect } from 'react'
import { View, Text, FlatList, Button, StyleSheet, Image } from 'react-native'
import { connect } from 'react-redux';
import { getCarsList } from '../../redux/actions/carsActions';

const Home = ({ navigation, getCarsList, products }) => {

    useEffect(() => {
        getCarsList()
    }, [])

    const renderItem = ({ item }) => {
        return (
            <View style={styles.cardContainer}>
                <Image 
                    style={styles.image}
                    source={{
                        uri: `http://106.51.72.111:9090${item.LogoPath}`
                    }}
                />
                <Text style={styles.textContent}>{item.Name}</Text>
            </View>
        )
    }

    return (
        <View>
            <FlatList 
                keyExtractor={item => item.ID.toString()}
                data={products && products.getCarsList}
                numColumns={2}
                renderItem={renderItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        flex: 1, 
        flexDirection: 'column', 
        alignItems: 'center',
        margin: 10,
        padding: 10,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        backgroundColor: '#fff',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 1

    },
    image: {
        height: 30,
        width: 30,
    },
    textContent: {
        // textAlign: 'center'
    }
})

const mapStateToProps = state => ({
    products: state.products
})

const mapDispatchToProps = { getCarsList }

export default connect(mapStateToProps, mapDispatchToProps)(Home)
