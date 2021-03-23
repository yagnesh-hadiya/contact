import React, { useState } from 'react';
import SignUpComponents from '../../components/signUp';

const Register = () => {
    const [form, setForm] = useState({});
    const [error, setError] = useState({});

    const onChange = ({ name, value }) => {
        setForm({ ...form, [name]: value });

        if (value !== '') {
            if (name === 'password') {
                if (value.length < 6) {
                    setError((prev) => {
                        return { ...prev, [name]: 'Min. 6 character' };
                    });
                } else {
                    setError((prev) => {
                        return { ...prev, [name]: null };
                    });
                }
            } else {
                setError((prev) => {
                    return { ...prev, [name]: null };
                });
            }
        } else {
            setError((prev) => {
                return { ...prev, [name]: 'This field is require.' };
            });
        }
    }

    const onSubmit = () => {
        if (!form.userName) {
            setError((prev) => {
                return { ...prev, userName: 'Please add a username' }
            })
        }
         if (!form.firstName) {
            setError((prev) => {
                return { ...prev, firstName: 'Please add a firstName' }
            })
        }
         if (!form.lastName) {
            setError((prev) => {
                return { ...prev, lastName: 'Please add a lastName' }
            })
        }
         if (!form.email) {
            setError((prev) => {
                return { ...prev, email: 'Please add a email' }
            })
        }
         if (!form.password) {
            setError((prev) => {
                return { ...prev, password: 'Please add a password' }
            })
        }
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