import { RetrievedUserData } from "../types/AuthTypes"

export interface InitialAuthStateType {
    authenticated: boolean
    user?: RetrievedUserData
}

const authState: InitialAuthStateType = {
    authenticated: true,
    user: undefined
}


export default authState
