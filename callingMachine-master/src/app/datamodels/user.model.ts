export class User {
	id: string;
	username: string;
	role: string;
	token: string;

	constructor(user: Partial<User>) {
		Object.keys(user).forEach((key) => (this[key] = user[key]));
	}
}
