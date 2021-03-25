import { REGISTER_FAIL, REGISTER_LOADING, REGISTER_SUCCESS } from "../../../constants/actionTypes";
import axiosInstance from "../../../helpers/axiosInterceptor";

export default ({
    userName:username,
    firstName: first_name,
    lastName: last_name,
    email,
    password
}) => dispatch => {
    dispatch({
        type: REGISTER_LOADING,
    })
    axiosInstance.post('auth/register', {
        username,
        first_name,
        last_name,
        email,
        password
    }).then(res => {
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data,

        })
    }).catch((err) => {
        // console.log(('err',err))
        dispatch({
            type: REGISTER_FAIL,
            payload: err.response ? err.response.data : { error: "Something went wrong try again.." },

        })
    })
};