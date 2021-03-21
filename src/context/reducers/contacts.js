import { GET_CONTACT } from "../../constants/routeNames";

const Contacts = (state, { type, payload }) => {
    switch (type) {
        case GET_CONTACT:
            return state;
        default:
            return state;
    }
}
export default Contacts;