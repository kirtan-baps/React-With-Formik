/* eslint-disable no-unused-vars */
import React from 'react'
import { useFormik } from "formik";
// import {} from 'yup';
import * as Yup from 'yup';


const initialValues = {
    name: 'TEMP NAME',
    email: '',
    channel: '',
}
const onSubmit = values => {
    console.log("values of Form Submit", values)
}
const validate = values => {
    let errors = {}
    if (!values.name) {
        errors.name = 'Name Required';
    }
    if (!values.email) {
        errors.email = 'Email Required';
    } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(values.email)) {
        errors.email = 'Invalid Email';
    }
    if (!values.channel) {
        errors.channel = 'Channel Required';
    }
    return errors;
}

const validationSchema = Yup.object({
    name: Yup.string().required('Name Required Field'),
    email: Yup.string().required('Email Required Field').email('Email Invalid Format'),
    channel: Yup.string().required('Channel Required Field'),
})

const OldYoutubeForm = () => {
    // const formik = useFormik({
    //   initialValues: initialValues,
    //   onSubmit: onSubmit,
    //   validate: validate,
    // });
    // const formik = useFormik({ initialValues, onSubmit, validate, });
    const formik = useFormik({ initialValues, onSubmit, validationSchema });

    console.log("Form Touched===========", formik.touched)
    console.log("Form Values===========", formik.values)

    return (
        <div>
            <form onSubmit={formik.handleSubmit} >
                <label >Name</label>
                <input
                    type="text"
                    name='name'
                    id='name'
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    onBlur={formik.handleBlur}
                    {...formik.getFieldProps('name')}
                />
                {/* {formik.errors.name && <p>{formik.errors.name}</p>} */}
                {formik.touched.name && formik.errors.name && formik.errors.name}
                <br />
                <label >Email</label>
                <input
                    type="text"
                    name='email'
                    id='email'
                    // onChange={formik.handleChange}
                    // value={formik.values.email}
                    // onBlur={formik.handleBlur}
                    {...formik.getFieldProps('email')}
                />
                {formik.touched.email && formik.errors.email && formik.errors.email}
                <br />
                <label >Channel</label>
                <input
                    type="text"
                    name='channel'
                    id='channel'
                    // onChange={formik.handleChange}
                    // value={formik.values.channel}
                    // onBlur={formik.handleBlur}
                    {...formik.getFieldProps('channel')}
                />
                {formik.touched.channel && formik.errors.channel && formik.errors.channel}
                <br />
                <button type='submit' >Submit</button>
            </form>
        </div>
    )
}

export default OldYoutubeForm