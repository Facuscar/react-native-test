import React from 'react'
import { Formik, useField } from 'formik'
import { Button, StyleSheet, View } from 'react-native'

import StyledTextInput from '../components/StyledTextInput'

const styles = StyleSheet.create({
  form: {
    margin: 12
  }
})

const FormikInputValue = ({ name, ...props }) => {
  const [field, , helpers] = useField(name)
  return (
    <StyledTextInput
      value={field.value}
      onChangeText={value => helpers.setValue(value)}
      {...props}
    />
  )
}

const LogIn = () => {
  const initialValues = {
    email: '',
    password: ''
  }
  return (
    <Formik initialValues={initialValues} onSubmit={(values) => console.log(values)}>
      {({ handleChange, handleSubmit, values }) => {
        return (
          <View style={styles.form}>
            <FormikInputValue name='email' placeholder='E-mail' />
            <FormikInputValue name='password' secureTextEntry />
            <Button title='Log in' onPress={handleSubmit} />
          </View>
        )
      }}
    </Formik>
  )
}

export default LogIn
