import React from 'react'
import { Formik } from 'formik'
import { Button, StyleSheet, View } from 'react-native'

import StyledTextInput from '../components/StyledTextInput'

const styles = StyleSheet.create({
  form: {
    margin: 12
  }
})

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
            <StyledTextInput
              placeholder='E-mail'
              value={values.email}
              onChangeText={handleChange('email')}
            />
            <StyledTextInput
              value={values.password}
              onChangeText={handleChange('password')}
            />
            <Button title='Log in' onPress={handleSubmit} />
          </View>
        )
      }}
    </Formik>
  )
}

export default LogIn
