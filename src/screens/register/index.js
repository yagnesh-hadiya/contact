import React, { useState } from 'react';
import SignUpComponents from '../../components/signUp';
const Register = () => {
    const [form, setForm] = useState({});
    const [error, setError] = useState({});

    const onChange = ({ name, value }) => {
        setForm({ ...form, [name]: value });
    }

    const onSubmit = () => {

    }

    return (

        <SignUpComponents
            onChange={onChange}
            onSubmit={onSubmit}
            form={form}
            error={error}
        />
    );
}
export default Register;