import React, { useContext, useState } from 'react';
import SignUpComponents from '../../components/signUp';
import register from '../../context/actions/auth/register';
import { globalContext } from '../../context/provider';

const Register = () => {
    const [form, setForm] = useState({});
    const [errors, setError] = useState({});
    const { authDispatch, authState: { error, loading, data } } = useContext(globalContext);

    // console.log('authState:>', authState)

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
        if (Object.values(form).length === 5 &&
            Object.values(form).every(item => item.trim().length > 0) &&
            Object.values(console.error).every((item) => !item)
        ) {
            register(form)(authDispatch);
        }
    }

    return (

        <SignUpComponents
            onChange={onChange}
            onSubmit={onSubmit}
            form={form}
            error={error}
            errors={errors}
            loading={loading}
        />
    );
}
export default Register;