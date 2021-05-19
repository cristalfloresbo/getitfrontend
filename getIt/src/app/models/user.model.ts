import { WorkArea } from './workArea.model';

export interface User {
    Id: number;
    firstname: string;
    lastname: string;
    phone: string;
    bithdate: string;
    address: string;
    workArea: WorkArea;
    score: number;
    email: string;
}

export interface Users {
    Id: number;
    firstname: string;
    lastname: string;
    phone: string;
    bithdate: string;
    address: string;
    workAreaId: number;
    score: number;
    email: string;
}

export interface UserModel {
    id: number;
    firstname: string;
    lastname: string;
    phone: string;
    birthdate: Date;
    address: string;
    workArea: WorkArea;
    score: number;
    email: string;
}
