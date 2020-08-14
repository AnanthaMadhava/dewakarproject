import React, { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import TextFieldGroup from '../../ReusableComponents/TextFieldGroup'
import { connect } from 'react-redux';
import { userLogin } from '../../../redux/actions/authActions'

const Login = ({ userLogin }) => {

    const [ formData, setFormData ] = useState({
        EmailID: '',
        UserPwd: '',
    })

    const submit = () => {
        const data = {
            user: formData,
            loginDetail: {
                LoginID: formData.EmailID
            }
        }
        userLogin(data)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Login</Text>
            <TextFieldGroup 
                placeholder="Email Address"
                required
                onChange={text => setFormData({...formData, EmailID: text})}
                value={formData.EmailID}
            />
            <TextFieldGroup 
                placeholder="Password"
                required
                onChange={text => setFormData({...formData, UserPwd: text})}
                value={formData.UserPwd}
            />
            <View style={styles.button}>
                <Button 
                    title="Login"
                    onPress={submit}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        padding: 20
    },
    button: {
        marginHorizontal: 10,
        marginVertical: 5
    }
})

const mapDispatchToProps = { userLogin }

export default connect(null, mapDispatchToProps)(Login)
