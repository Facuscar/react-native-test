import React from 'react'
import { Formik, useField } from 'formik'
import { Button, StyleSheet, View } from 'react-native'

import StyledTextInput from '../components/StyledTextInput'
import StyledText from '../components/StyledText'

const styles = StyleSheet.create({
  error: {
    color: 'red',
    fontSize: 12,
    marginBottom: 20,
    marginTop: -5
  },
  form: {
    margin: 12
  }
})

const FormikInputValue = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name)
  return (
    <>
      <StyledTextInput
        value={field.value}
        onChangeText={value => helpers.setValue(value)}
        error={meta.error}
        {...props}
      />
      {meta.error && <StyledText style={styles.error}>{meta.error}</StyledText>}
    </>
  )
}

const validate = values => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  const errors = {}

  if (!values.email) {
    errors.email = 'Email is required'
  } else if (!emailRegex.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  console.log(errors)
  return errors
}

const LogIn = () => {
  const initialValues = {
    email: '',
    password: ''
  }
  return (
    <Formik validate={validate} initialValues={initialValues} onSubmit={(values) => console.log(values)}>
      {({ handleSubmit }) => {
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
