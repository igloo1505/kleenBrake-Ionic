import { AxiosRequestConfig } from "axios";

// export const _path = (subPath: string) => `http://localhost:3000/${subPath}`

export const ROOTPATH = "http://localhost:3000"

export default {
    path: (subPath: string) => `${ROOTPATH}/api/server${subPath}`,
    defaultAxiosConfig: {
        headers: {
            "Content-Type": "application/json"
        }
    }
} as {
    path: (p: string) => string,
    defaultAxiosConfig: AxiosRequestConfig
}
