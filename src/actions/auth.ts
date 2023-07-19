import axios from 'axios'
import config from '../utils/axiosUtils'
import { Prisma, ROLE, User } from '@prisma/client'


// const getUserData = (id: string) => {
//             
//     }



export const validateOrRedirect = async (roles?: ROLE[] | null, include?: Prisma.UserInclude) => {
    const res = await axios.post(config.path("/validateOrRedirect"), { roles, include }, config.defaultAxiosConfig)
    console.log("res: ", res)
    return res.data
}


export const getChildrenData = async (user: User) => {
    const res = await axios.post(config.path("/getChildrenData"), { user }, config.defaultAxiosConfig)
    return res.data?.lineage || false
}
