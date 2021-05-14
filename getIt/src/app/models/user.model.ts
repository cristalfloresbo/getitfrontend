import { WorkArea } from "./workArea.model";

export interface User {
    userId: string;
    firstname: string;
    lastname: string;
    bithdate: string;
    address: string;
    phone: string;
    score: number;
    email: string;
    password: string;
    photo: string;
}

export interface Users {
    Id: number;
    firstname: string;
    lastname: string;
    phone: string;
    bithdate: string;
    address: string;
    workAreaId: number;
    email: string;
}

export interface User1 {
    userId: string;
    firstname: string;
    lastname: string;
    bithdate: string;
    address: string;
    phone: string;
    workArea: WorkArea;
    score: number;
    email: string;
    password: string;
    photo: string;
}
