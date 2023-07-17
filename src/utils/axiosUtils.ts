import { AxiosRequestConfig } from "axios";

// export const _path = (subPath: string) => `http://localhost:3000/${subPath}`

export default {
    path: (subPath: string) => `http://localhost:3000/api/server${subPath}`,
    defaultAxiosConfig: {
        headers: {
            "Content-Type": "application/json"
        }
    }
} as {
    path: (p: string) => string,
    defaultAxiosConfig: AxiosRequestConfig
}
