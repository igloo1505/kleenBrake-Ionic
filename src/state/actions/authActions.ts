import axios from 'axios'
import { defaultAxiosConfig } from '../types/NetworkTypes'
import store from '../store'
import { LoginUserData, NewUserData } from '../types/AuthTypes'
import { loginSuccess, logout } from '../slices/auth'
import { publicError, showToast } from '../slices/ui'
import { ROOTPATH } from '../../utils/axiosUtils'


export const createNewUser = async (user: NewUserData) => {
    const res = await axios.post(`${ROOTPATH}/api/users/createUser`, { user }, defaultAxiosConfig)
    if (res.data?.success) {
        store.dispatch(
            loginSuccess(res.data.newUser)
        )
    }
    if (!res.data?.success) {
        if (res.data?.publicError) {
            store.dispatch(publicError(res.data.publicError))
        }
    }
    return res.data
}


export const loginUser = async (data: LoginUserData) => {
    console.log("data: ", data)
    const res = await axios.post(`${ROOTPATH}/api/users/login`, { user: data }, defaultAxiosConfig)
    console.log("res: ", res)
    if (res.data?.success) {
        store.dispatch(
            loginSuccess(res.data.user)
        )
    }
    if (!res.data?.success) {
        store.dispatch(
            showToast({
                severity: "error",
                content: "There was an error logging in.",
            })
        )
    }
    return res.data
}

export const logoutUser = async () => {
    await axios.post(`${ROOTPATH}/api/users/logout`, {}, defaultAxiosConfig)
    store.dispatch(
        logout()
    )
    window.location.pathname = "/"
}

