/* eslint-disable no-unused-vars */
import React from 'react'

import { useFormik } from "formik";
const App = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      channel: '',
    },
    onSubmit: (values) => {
      console.log("values of Form Submit", values)
    }
  });

  console.log("Form Values===========", formik.values)

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label >Name</label>
        <input type="text" name='name' onChange={formik.handleChange} value={formik.values.name} />
        <br />
        <label >Email</label>
        <input type="text" name='email' onChange={formik.handleChange} value={formik.values.email} />
        <br />
        <label >Channel</label>
        <input type="text" name='channel' onChange={formik.handleChange} value={formik.values.channel} />
        <br />
        <button type='submit' >Submit</button>
      </form>
    </div>
  )
}

export default App