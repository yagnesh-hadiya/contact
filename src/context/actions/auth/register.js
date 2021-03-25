import { REGISTER_FAIL, REGISTER_LOADING, REGISTER_SUCCESS } from "../../../constants/actionTypes";
import axiosInstance from "../../../helpers/axiosInterceptor";

export default ({
    userName,
    firsName,
    lastName,
    email,
    password
}) => dispatch => {
    dispatch({
        type: REGISTER_LOADING,
    })
    axiosInstance.post('auth/register', {
        userName,
        firsName,
        lastName,
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
            payload:err.response? err.response.data:{error:"Something"},

        })
    })
};