import { WorkArea } from './workArea.model';

export interface User {
    Id: number;
    firstname: string;
    lastname: string;
	phone: string;
	bithdate: string;
	address: string;
	workArea: WorkArea;
	email: string;
}
