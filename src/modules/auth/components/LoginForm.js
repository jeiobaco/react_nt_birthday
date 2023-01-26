import React from 'react'
import { View, StyleSheet, Button } from 'react-native'
import { Formik } from 'formik'
import FormikInput from '../../../shared/components/FormikInput'
import { loginSchema } from '../../../formsValidations/authSchemas'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../firebase/config'

const initialValues = {
    password: '',
    email: '',
}
export default function LoginForm() {

    const login = ({email, password}) => {
        console.log("login.. ", email)
        signInWithEmailAndPassword(auth,email, password)
    }
    return (
        <Formik
            validationSchema={loginSchema}
            initialValues={initialValues}
            onSubmit={values => login(values) }>
            {({ handleSubmit }) => (
                <View style={styles.view}>
                    <FormikInput
                        placeholder='Email'
                        placeholderTextColor='#969696'
                        name='email'/>
                    <FormikInput
                        placeholder='Password'
                        secureTextEntry 
                        placeholderTextColor='#969696'
                        name='password'/>
                    <Button onPress={handleSubmit} type="submit" title="Log In" />
                </View>
            )}
        </Formik>
    )
}


const styles = StyleSheet.create({
    view: {
        width:'100%',
        flex:1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnText: {
        color: '#fff',
        fontSize: 18,
    }
});