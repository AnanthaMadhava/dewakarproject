import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/Home';
import Login from '../Screens/Register_Login/Login';

const Stack = createStackNavigator();

const Navigation = ({ auth }) => {
    const { isAuthenticated, user } = auth;
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Login'
            >
                {
                    isAuthenticated ?
                        <Stack.Screen 
                            name="Home" 
                            component={Home} 
                            options={({ route }) => ({
                                title: 'Cars',
                                headerRight: () => (
                                    <View style={styles.userInfo}>
                                        <Text>{user && user.FirstName}</Text>
                                    </View>
                                )
                            })}
                        />
                    : 
                        <Stack.Screen 
                            name="Login" 
                            component={Login} 
                            options={({ route }) => ({
                                headerShown: false
                            })}
                        />
                }
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    userInfo: {
        marginRight: 15,
        fontSize: 15
    }
})

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps, null)(Navigation)
