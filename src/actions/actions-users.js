import { GET_USERS } from "./actionTypes";

export const getUsers = (users) => {
    return {
        type: GET_USERS,
        users
    }
};