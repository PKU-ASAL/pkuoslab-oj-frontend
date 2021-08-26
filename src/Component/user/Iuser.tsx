import {WithTranslation} from "react-i18next";

export enum Sex {
    Unknown = 0,
    Male = 1,
    Female = 2
}

export enum Role {
    SuperAdmin = 0,
    Admin = 1,
    user = 2
}


export interface IUser {
    id: number
    student_id?: string
    sdu_id?: string
    username: string
    nickname?: string
    sex?: Sex
    email?: string
    roles: Role[]
}


export interface IUserPropCbk extends WithTranslation {
    id: number
    callback: (id: number) => void
}


export interface IUserPropRoles extends WithTranslation {
    id: number
    roles: Role[]
}

export interface IUserPropAvatar extends WithTranslation{
    id: number
    email: string
    username: string
}
