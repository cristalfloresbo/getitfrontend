import { User } from './user.model';

export interface Ad {
    adId: string;
    title: string;
    imageURL: string;
	description: string;
	heading: string;
	type: string;
	requiredTime: string;
	fee: string;
	postDate: string;
	user: User;
}
