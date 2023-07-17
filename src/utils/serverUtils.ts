// import { prisma, stripe } from '../utils/db'
import { audience, decryptToken, issuer, alg, validateFromCookieValues } from './auth'
import * as jose from 'jose'
// import { NextApiRequest } from 'next'
// import { cookies } from 'next/headers'
// import { Dashboard, Lineage, Prisma, ROLE, Transaction, User } from '@prisma/client'
// import { CreateStripeCustomerType, childrenDataType } from '../state/types/AuthTypes'
// import { CreateJobType, maxJobsPerPage } from '../types/jobTypes'

const secret = new TextEncoder().encode(process.env.QR_SECRET!)



// BUG: Fix every place where NextApiRequest is imported and used. All of the authentication validation functions will need to be remapped to Ionic's method.

// export const isAuthenticatedAdmin = async (req: any) => {
//     let userId = req.cookies?.userId
//     let auth = req.cookies?.auth
//     if (!auth || !userId) {
//         return false
//     }
//     const decrypted = await decryptToken(auth)
//     if (!decrypted || !decrypted.payload.userId || decrypted.payload.userId !== userId) {
//         return false
//     }
//     const user = await prisma.user.findFirst({
//         where: {
//             username: userId
//         }
//     })
//     if (!user) {
//         return false
//     }
//     return user.role === "ADMIN"
// }



export const getQrData = async (transactionId: string, price: string | number) => {
    const jwt = await new jose.SignJWT({ transactionId: transactionId, price: price })
        .setProtectedHeader({ alg })
        .setIssuedAt()
        .setIssuer(issuer)
        .setAudience(audience)
        .setExpirationTime('3d')
        .sign(secret)
    return jwt
}


export const acceptTransactionCode = async (transActionCode: string, userId: string | number) => {
    console.log("transActionCode, userId: ", transActionCode, userId)

}



// export const validateOrRedirect = async (roles?: ROLE[], include?: Prisma.UserInclude): Promise<{
//     user: (User & { dashboard: Dashboard }) | null,
//     redirectPath: false | null | string
// }> => {
//     // BUG: Figure out how to use cookies inside of Ionic.

//     const cookieJar = cookies()
//     const authToken = cookieJar.get("auth")?.value
//     const userId = cookieJar.get("userId")?.value
//     if (!userId || !authToken) {
//         return {
//             user: null,
//             redirectPath: "/"
//         }
//     }
//     const isAuthed = await validateFromCookieValues(userId, authToken)
//     if (!isAuthed) {
//         return {
//             user: null,
//             redirectPath: "/"
//         }
//     }
//     const user = await prisma.user.findFirst({
//         where: {
//             username: userId
//         },
//         include: include ? include : {
//             dashboard: true
//         }
//     })
//     if (!user || (roles && roles.indexOf(user?.role) === -1)) {
//         return {
//             user: null,
//             redirectPath: "/"
//         }
//     }
//     if (user) {
//         return {
//             user: user,
//             redirectPath: false,
//         }
//     }
//     return {
//         user: null,
//         redirectPath: "/"
//     }
// }


// export const getStripeCustomer = async (username: string, data?: CreateStripeCustomerType) => {
//     const user = await prisma.user.findFirst({
//         where: {
//             username: username
//         },
//         include: {
//             dashboard: true
//         }
//     })
//     if (!user) {
//         return false
//     }
//     const name = data?.name || user.nameOnAccount
//     if (name) {
//         const customer = await stripe.customers.create({
//             email: user.email,
//             name: name
//         });
//         return customer
//     }
//     return false
// }

// export interface getSubscriptionResponse {
//     subscription: Awaited<ReturnType<typeof stripe.subscriptions.retrieve>>,
//     active: boolean
// }

// export const getSubscription = async (subscriptionId: string): Promise<getSubscriptionResponse> => {
//     const sub = await stripe.subscriptions.retrieve(subscriptionId)
//     const active = sub?.status === "active"
//     if (!active) {
//         await prisma.user.update({
//             where: {
//                 subscriptionId: subscriptionId
//             },
//             data: {
//                 subscriptionId: null,
//                 role: "USER"
//             }
//         })
//     }
//     return {
//         subscription: sub,
//         active: active
//     }
// }

// export const getServiceItemDetails = async () => {
//     const service = await stripe.prices.retrieve(process.env.LAUNDRY_SERVICE_PRICE_KEY!)
//     return service
// }

// export const getServicePurchase = async (paymentId: string) => {
//     const purchase = await stripe.paymentIntents.retrieve(paymentId)
//     return purchase
// }


// interface ChildUser extends User {
//     depth: number
// }


// let parent: ChildUser[] = []
// let temp: ChildUser[] = []
// const getChildren = async (parentId: number, depth: number): Promise<ChildUser[] | undefined> => {
//     if (depth === 1) {
//         temp = []
//     }
//     if (depth > 1 && temp.length === 0) {
//         const d = parent
//         temp = []
//         parent = []
//         depth = 1
//         return d
//     }
//     const users = await prisma.user.findMany({
//         where: {
//             parentId: depth === 1 ? parentId : temp[0].id
//         },
//         include: {
//             dashboard: true
//         }
//     })
//     const data = users.map((u) => {
//         return {
//             ...u,
//             depth: depth
//         }
//     })
//     if (data.length === 0 && depth === 1) {
//         return data
//     }
//     temp = [...temp, ...data]
//     if ((temp.length >= 0)) {
//         const t: ChildUser[] = []
//         temp.forEach((j) => {
//             if (j.id === parentId) {
//                 parent.push(j)
//             }
//             if (j.id !== parentId) {
//                 t.push(j)
//             }
//         })
//         temp = t
//         getChildren(temp[0].id, temp[0].depth + 1)
//     }
// }

// export const populateChildren = async (userId: string): Promise<ChildUser[]> => {
//     const children = await getChildren(parseInt(userId), 1)
//     return children || []
// }

// export const parseCreateJob = (j: CreateJobType, locationId?: number): Prisma.JobCreateArgs => {
//     const locId = locationId || j.location.id
//     delete j.location.id
//     const _loc: Prisma.LocationCreateNestedOneWithoutJobInput = typeof locId === "undefined" ? {
//         create: {
//             ...j.location
//         }
//     } : {
//         connectOrCreate: {
//             where: {
//                 id: locId
//             },
//             create: {
//                 ...j.location
//             }
//         }
//     }
//     const data: Prisma.JobCreateArgs = {
//         data: {
//             ...j.job,
//             pickupWindow: {
//                 create: {
//                     ...j.pickup
//                 }
//             },
//             dropOffWindow: {
//                 create: {
//                     ...j.dropoff
//                 }
//             },
//             location: _loc
//         }
//     }
//     return data
// }

// export const getActiveJobs = async (page?: number, onlyActive: boolean = true) => {
//     const jobs = await prisma.job.findMany({
//         ...(onlyActive && {
//             where: {
//                 dateReturned: null
//             }
//         }),
//         orderBy: {
//             dateSubmitted: "asc"
//         },
//         include: {
//             pickupWindow: true,
//             dropOffWindow: true,
//             location: true,
//             pickedUpBy: true,
//             droppedOffBy: true,
//         },
//         ...(page && { skip: maxJobsPerPage * (page - 1) }),
//         ...(page && { take: maxJobsPerPage })
//     })
//     return jobs
// }



// export const getChildrenData = async (user: User) => {
//     const lineage = await prisma.user.findMany({
//         where: {
//             AND: {
//                 lineageId: user.lineageId,
//                 createdAt: {
//                     gte: user.createdAt
//                 },
//                 id: {
//                     not: user.id
//                 }
//             }
//         },
//         orderBy: {
//             createdAt: "asc"
//         },
//         include: {
//             dashboard: {
//                 include: {
//                     transactions: true,
//                     _count: {
//                         select: {
//                             transactions: true
//                         }
//                     }
//                 }
//             },
//             children: {
//                 include: {
//                     dashboard: {
//                         include: {
//                             transactions: true,
//                             _count: {
//                                 select: {
//                                     transactions: true
//                                 }
//                             }
//                         }
//                     }
//                 },
//             }
//         }
//     })
//     if (!lineage) return []
//     return lineage
// }
