import React from 'react'
import { FancyInput } from '@monorepo-starter/core'
import { userProfileValidationSchema } from '@monorepo-starter/fancy-app-shared'
import axios from 'axios'
import { Formik } from 'formik'

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Formik
        initialValues={{
          name: '',
          password: '',
          email: '',
        }}
        validateOnMount
        validationSchema={userProfileValidationSchema}
        onSubmit={async values => {
          const {
            data: { data },
          } = await axios.post('/create-user', values)

          alert(`Success! Created ${data.name}`)
        }}
      >
        {({
          handleSubmit,
          isValid,
          handleBlur,
          handleChange,
          values: { name, password, email },
          touched,
          errors,
        }) => {
          const nameError = touched.name && errors.name
          const passwordError = touched.password && errors.password
          const emailError = touched.email && errors.email

          return (
            <form onSubmit={handleSubmit} autocomplete="off">
              <FancyInput
                label="Name"
                name="name"
                onChange={handleChange}
                onBlur={handleBlur}
                value={name}
                error={nameError}
              />
              <FancyInput
                label="Password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={password}
                error={passwordError}
              />
              <FancyInput
                label="Email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={email}
                error={emailError}
              />

              <button disabled={!isValid}>Submit!</button>
            </form>
          )
        }}
      </Formik>
    </div>
  )
}
