import { LOGIN } from "../../constants/routeNames";

const auth = (state, { type, payload }) => {
    switch (type) {
        case LOGIN:
            return state;
        default:
            return state;
    }
}
export default auth;